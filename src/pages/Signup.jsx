import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import dynamicAppTitle from "../js/dynamicAppTitle";
import { Spinner } from "react-bootstrap";

const Signup = () => {
  dynamicAppTitle("Signup");

  const navigate = useNavigate();

  const { createUser, updateUser, loading, setLoading } =
    useContext(AuthContext);

  const [upProfile, setUpProfile] = useState(false);
  const [nameState, setNameState] = useState("");
  const [photoState, setPhotoState] = useState("");
  const [errorState, setErrorState] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (email == "") {
      return setErrorState("email field cannot be empty");
    }

    if (password == "") {
      return setErrorState("password field cannot be empty");
    }

    if (password.length < 6) {
      return setErrorState("Password should be atleast 6 characters long");
    }

    createUser(email, password)
      .then((credential) => {
        setNameState(name);
        setPhotoState(photo);
      })
      .catch((err) => setLoading(false));

    form.reset();
  };

  useEffect(() => {
    if (upProfile === false) {
      setUpProfile(!upProfile);
    } else {
      updateUser(nameState, photoState)
        .then((credential) => {
          setLoading(false);
          navigate("/#top");
        })
        .catch((err) => setLoading(false));
    }
  }, [nameState]);

  return (
    <div className="py-5">
      <div className="container mx-auto d-flex align-items-center justify-content-center">
        <div className="form w-100 w-lg-50 p-1 p-lg-4 mx-auto">
          <div className=" rounded-2 shadow p-5 d-flex flex-column gap-3 flex-grow-1 border">
            {errorState && (
              <h5 className="text-danger fw-bold text-center">{errorState}</h5>
            )}
            <h3 className="pt-2 teko-font">Sign Up</h3>

            <form onSubmit={formSubmitHandler}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="floatingName"
                  placeholder="your name"
                />
                <label htmlFor="floatingName">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="photo"
                  className="form-control"
                  id="floatingPhoto"
                  placeholder="https://abcd.com/imageurl"
                />
                <label htmlFor="floatingPhoto">Photo URL</label>
              </div>

              <button
                type="submit"
                className="theme-button rounded border-0 px-3 py-2 fw-bold w-100 my-3"
              >
                {loading ? (
                  <Spinner animation="border" variant="light" size="sm" />
                ) : (
                  <h2 className="teko-font">Sign Up</h2>
                )}
              </button>

              <div className="py-2">
                <h3 className="text-center teko-font">
                  Already have an account? &nbsp;
                  <Link
                    to="/login"
                    className="fw-bold text-decoration-none theme-color"
                  >
                    Sign In
                  </Link>
                </h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
