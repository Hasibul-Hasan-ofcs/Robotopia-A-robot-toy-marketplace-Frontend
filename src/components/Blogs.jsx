import React from "react";
import "./../css/blogSectionHome.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const latest = [
  {
    img: "https://ucarecdn.com/d5503b06-ce10-4651-8b9b-d5c3bb7249ad/",
    heading: "React 18 Release: A Deep Dive Into New Features and Updates",
    text: "React has come a long way in the past decade, undergoing significant transformations that have made it one of the most widely used front-end UI frameworks available today. Initially, React’s verbose syntax made it challenging for developers to work with. However, React introduced the JSX syntax, simplifying the creation of components. To follow, functional components with Hooks made it easier to handle state and life-cycle functions, leading to more elegant, readable, and maintainable code. With the introduction of server-side rendering (SSR) in React 16, performance improved by allowing faster initial page load times and better search engine optimization (SEO). And full-stack frameworks like Next.js and Remix have made React even more accessible, further increasing its popularity.",
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto py-5">
      <h1 className="bebas-font py-5 fw-bold text-center text-white">
        Latest Blogs
      </h1>

      {latest.map((el, indx) => (
        <div className="blog_home_card p-4 p-lg-5 my-5" key={indx}>
          <div className="d-flex gap-2 flex-column flex-lg-row align-content-start align-items-lg-end">
            <div className="img d-inline-block">
              <img src={el.img} alt="blog" />
            </div>
            <div className="h-100 d-flex flex-column justify-content-between">
              <h2 className="bebas-font fw-bold text-start text-white">
                {el.heading}
              </h2>
            </div>
          </div>
          <p className="py-3">"{el.text}"</p>
          <p className="text-white">
            View in{" "}
            <HashLink
              to="/blogs/#blogs-top"
              className="underline theme-color blog_link"
            >
              blogs &rarr;
            </HashLink>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
