import React from "react";
import dynamicAppTitle from "../js/dynamicAppTitle";
import BannerCommon from "../components/BannerCommon";
import "../css/glassmorphism.css";

const Blogs = () => {
  dynamicAppTitle("Blogs");

  const blogObj = [
    {
      qst: "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      ans: "Access and Refresh tokens are credentials that enable secure data accessing through the server-client side communications. Access tokens are short-lived data that stays valid for a short period of time. Using access tokens specific types of data can be accessed from the database or backend server directly only by validating the user request. Access tokens are included in the API request headers or passed as query parameter. On the other hand refresh tokens are long-lived tokens that stays valid for a long period of time. Refresh tokens are granted with access token and stays valid even after the access token is expired. Refresh tokens are securely stored and exchanged with a token endpoint to obtain a new access token when needed. Access tokens and Refresh tokens include confidential data. So, they need to be stored with caution and security. On the client side it can be stored in session storage, local storage, or HTTP-only cookies. These mechanisms prevent malicious codes form accessing these token directly. HTTP-only cookies are better option than local storage based on security purpose. Long-term refresh tokens are way more sensitive than Access tokens. They can also be stored in HTTP-only cookie. Alternatively, in a secure server-side sessions.",
    },
    {
      qst: "Compare SQL and NoSQL databases?",
      ans: "SQL stands for Structured Query Language. And NoSQL refers to non-SQL! SQL databases follow a tabular, relational data model. So, SQL databases are vertically scalable, that means it is handled in tabular format. On the other hand NoSQL databases are horizontally scalable. Data is stored in document format. Some SQL database examples are MySQL, PostgreSQL. And NoSQL databases are MongoDB, Redis etc.",
    },
    {
      qst: "What is express js? What is Nest JS?",
      ans: "Express JS is a framework of Node JS used for building server-side applications.It is a minimalist, easy to use, flexible server-side framework. Express.js allows to handle HTTP requests, route definitions, and implement middleware for processing incoming requests and generating responses. Express makes is way easier to build small-mid level applications efficiently and effectively. Nest JS is another framework of Node JS. Unlike Express Nest js follows a modular and structured design pattern which makes it easier to build large-scale applications effectively. Nest JS is based on TypeScript and JavaScript. Nest JS can be better choice for reliable, maintainable solution to create enterprise-level applications.",
    },
    {
      qst: "What is MongoDB aggregate and how does it work?",
      ans: "In MongoDB database system MongoDB aggregate refers to a framework that performs advanced data processing and analysis operations on collections of documents. Different operations, such as filtering, grouping, transforming, and aggregating data can be done in the database efficiently and effectively using it. It operates on a collection of documents and returns the computed results based on the specified pipeline of stages. It consists of different stages such as matching stage, grouping stage, projection stage, sorting stage, aggregation operators etc. With all these stages and operators it becomes easier to perform complex data transformations and aggregations in MongoDB.",
    },
  ];

  const latest = [
    {
      img: "https://ucarecdn.com/d5503b06-ce10-4651-8b9b-d5c3bb7249ad/",
      heading: "React 18 Release: A Deep Dive Into New Features and Updates",
      text: "React has come a long way in the past decade, undergoing significant transformations that have made it one of the most widely used front-end UI frameworks available today. Initially, React’s verbose syntax made it challenging for developers to work with. However, React introduced the JSX syntax, simplifying the creation of components. To follow, functional components with Hooks made it easier to handle state and life-cycle functions, leading to more elegant, readable, and maintainable code. With the introduction of server-side rendering (SSR) in React 16, performance improved by allowing faster initial page load times and better search engine optimization (SEO). And full-stack frameworks like Next.js and Remix have made React even more accessible, further increasing its popularity.",
    },
    {
      img: "https://www.animenewsnetwork.com/hotlink/thumbnails/crop1200x630gH0/herald/23265/mobile.suit.gundam.00.full.189661.jpg",
      heading: "Mobile Suit Gundam. Where to Start and What's Worth Watching",
      text: "",
    },
  ];

  return (
    <div className="">
      <BannerCommon pageName="Blogs"></BannerCommon>
      <div className="container py-5 d-flex flex-column gap-3">
        <div className="row mx-0">
          <div className="col-12 col-lg-8">
            <h1 className="teko-font py-4">Basic MERN QnA.</h1>
            {blogObj.map((el, indx) => (
              <div
                className="qnaCard dark_bg01 rounded-4 border p-3 mb-4"
                key={indx}
              >
                <h2 className="glass-box d-flex align-items-center flex-wrap gap-3 p-3">
                  <span className="teko-font theme-color fw-bolder">
                    Question :{" "}
                  </span>
                  <p className="py-0 my-0 text-white">{el.qst}</p>
                </h2>
                <br />
                <p className="p-3">
                  <span className="teko-font fw-bold theme-color fs-20">
                    Answer:
                  </span>
                  &nbsp;{el.ans}
                </p>
              </div>
            ))}
          </div>
          <div className="col-12 col-lg-4">
            <h1 className="teko-font py-4">Latest</h1>
            {latest.map((el, indx) => (
              <div
                className="cardBlog p-4 mb-4 d-flex flex-column gap-3 rounded-4 shadow"
                key={indx}
              >
                <img src={el.img} className="w-100 rounded" />
                <h1 className="teko-font">{el.heading}</h1>
                <p>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
