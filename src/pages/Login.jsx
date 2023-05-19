import React, { useContext, useState } from "react";
import "./../css/form.css";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AuthContext } from "../providers/AuthProvider";
import Robo3 from "../assets/images/robo_3.png";
import dynamicAppTitle from "../js/dynamicAppTitle";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const [errorState, setErrorState] = useState(null);
  const { login, googlePopUpSignIn, githubPopUpSignIn, theme, loading } =
    useContext(AuthContext);

  const navigate = useNavigate();
  dynamicAppTitle("Login");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const userTemp = userCredential.user;
        // console.log(userTemp);
        navigate("/");
      })
      .catch((err) => setErrorState(err.message));

    form.reset();
  };

  const handleGooglePopUpLogin = () => {
    googlePopUpSignIn()
      .then((result) => {
        const userTemp = result.user;
        // console.log(userTemp);
        navigate("/");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div
      className={`container-fluid py-5 ${
        theme ? "bg-dark-secondary" : "bg_cream_orange_01"
      }`}
    >
      <div className="container mx-auto d-flex flex-column flex-lg-row gap-3 gap-lg-0">
        <div className="w-100 w-lg-50 mx-auto">
          <img className="img-fluid" src={Robo3} />
        </div>
        <div className="form w-100 w-lg-50 p-1 p-lg-4 mx-auto">
          <div className="bg_cream_orange_01 rounded-2 shadow p-5 d-flex flex-column gap-3 flex-grow-1 border">
            {errorState && (
              <h5 className="text-danger fw-bold text-center">{errorState}</h5>
            )}
            <h3 className="pb-3 text-center">Hey there!</h3>
            <p className="text-center">
              Welcome back. Please use your credentials to get started with
              Robotopia
            </p>
            <form onSubmit={formSubmitHandler}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button
                type="submit"
                className="theme-button rounded border-0 px-3 py-2 fw-bold w-100 my-3"
              >
                {loading ? (
                  <Spinner animation="border" variant="light" size="sm" />
                ) : (
                  <span>Sign In</span>
                )}
              </button>

              <div className="py-2">
                <p className="text-center">
                  Don't have an account? &nbsp;
                  <Link
                    to="/signup"
                    className="fw-bold text-decoration-none theme-color"
                  >
                    Sign Up
                  </Link>
                </p>

                <p className="text-center border-bottom py-3">
                  Also sign in using
                </p>
              </div>
            </form>
            <div className="">
              <button
                type="submit"
                className="google_login_button rounded py-1 px-3 fw-medium w-100"
                onClick={handleGooglePopUpLogin}
              >
                <FaGoogle></FaGoogle> &nbsp; Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
