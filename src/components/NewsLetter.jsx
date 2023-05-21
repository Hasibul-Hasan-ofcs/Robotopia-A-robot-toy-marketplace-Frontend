import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsLetter = () => {
  const subscribeHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailData = form.email.value;

    toast.info(`${emailData} Thank you for subscribing to our newsletter.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="container-fluid newsletter mx-0 px-0">
      <div className="container-fluid glass-bg mx-0 px-0 d-flex flex-column justify-content-center align-items-center py-5">
        <h3
          className="text-white orbitron-font fw-bold px-4 py-3 my-2"
          style={{ fontSize: "30px" }}
        >
          Subscribe To Our Newsletter
        </h3>
        <form onSubmit={subscribeHandler}>
          <div className="input-group my-2">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="theme-button p-3 rounded border-0"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewsLetter;
