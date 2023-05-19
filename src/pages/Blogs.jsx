import React from "react";
import { useContext } from "react";
// import Pdf from "react-to-pdf";
import { AuthContext } from "../providers/AuthProvider";
import dynamicAppTitle from "../js/dynamicAppTitle";

const ref = React.createRef();

const Blogs = () => {
  const { theme } = useContext(AuthContext);

  dynamicAppTitle("Blogs");

  const questions = {
    first:
      "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
    second: "Compare SQL and NoSQL databases?",
    third: "What is express js? What is Nest JS?",
    fourth: "What is MongoDB aggregate and how does it work?",
  };

  const answers = {
    first: "",
    second: "",
    third: "",
    fourth: "",
  };

  return (
    <div className={`${theme ? "bg-dark-secondary" : "main_header_bg"}`}>
      <h1 className="text-center py-5 theme-color pacifico-font">Blogs</h1>
      {/* <div className="container mx-auto d-flex align-items-center justify-content-center">
        <Pdf
          targetRef={ref}
          filename="code-example.pdf"
          options={{ orientation: "landscape", unit: "in", format: [12, 12] }}
        >
          {({ toPdf }) => (
            <button className="btn theme-button" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div> */}

      <div className="container py-5 d-flex flex-column gap-3" ref={ref}>
        <div className="qnaCard bg-white rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">{questions.first}</p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;{answers.first}
          </p>
        </div>

        <div className="qnaCard bg-white rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">{questions.second}</p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;{answers.second}
          </p>
        </div>
        <div className="qnaCard bg-white rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">{questions.third}</p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;{answers.third}
          </p>
        </div>
        <div className="qnaCard bg-white rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">{questions.fourth}</p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;{answers.fourth}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
