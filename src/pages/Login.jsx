import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Google from "../assets/images/google.png";
import dynamicAppTitle from "../js/dynamicAppTitle";
import { Spinner } from "react-bootstrap";
import "../css/glassmorphism.css";

const Login = () => {
  dynamicAppTitle("Login");

  const navigate = useNavigate();
  const location = useLocation();

  const [errorState, setErrorState] = useState(null);
  const { login, googlePopUpSignIn, setLoading, loading } =
    useContext(AuthContext);

  // console.log(location);

  const from = location.state?.from?.pathname || "/";

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((credential) => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setErrorState(err.message);
        setLoading(false);
      });

    form.reset();
  };

  const handleGooglePopUpLogin = () => {
    googlePopUpSignIn()
      .then((credential) => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="py-5">
      <div className="container mx-auto d-flex align-items-center justify-content-center">
        <div className="form w-100 w-lg-50 p-1 p-lg-4 mx-auto">
          <div className="rounded-2 shadow p-5 d-flex flex-column gap-3 flex-grow-1 border">
            {errorState && (
              <h5 className="text-danger fw-bold text-center">{errorState}</h5>
            )}
            <h3 className="teko-font pb-3">LOGIN</h3>

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
                className="theme-button w-100 my-4 rounded border-0 px-3 py-2 fw-bold"
              >
                {loading ? (
                  <Spinner animation="border" variant="light" size="sm" />
                ) : (
                  <h2 className="teko-font">Sign In</h2>
                )}
              </button>

              <div className="py-2">
                <h3 className="text-center teko-font">
                  Don't have an account? &nbsp;
                  <Link
                    to="/signup"
                    className="text-decoration-none fw-bold theme-color"
                  >
                    Sign Up
                  </Link>
                </h3>

                <h3 className="text-center teko-font py-2">or</h3>
              </div>
            </form>
            <div className=" d-flex align-items-center justify-content-center">
              <button
                type="submit"
                className="glass-box scale-1p2 rounded py-1 px-3 fw-medium rounded-5"
                onClick={handleGooglePopUpLogin}
              >
                <img src={Google} className="height-50" /> &nbsp;&nbsp; Google
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
