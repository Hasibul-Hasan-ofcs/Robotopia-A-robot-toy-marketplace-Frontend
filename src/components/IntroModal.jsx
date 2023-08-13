import React from "react";
import "../css/introModal.css";
import BoxReveal from "./BoxReveal";

const IntroModal = () => {
  return (
    <div className="min-vh-100 min-vw-100 d-flex flex-column gap-4 justify-content-center align-items-center">
      <div className="ibx_box d-flex gap-2">
        <span className="d-inline-block ibx_bar ibx_one"></span>
        <span className="d-inline-block ibx_bar ibx_two"></span>
        <span className="d-inline-block ibx_bar ibx_three"></span>
      </div>
      <div className="ibx_title orbitron-font text-white">
        <BoxReveal delayProp={0.1}>
          <span>R</span>
        </BoxReveal>
        <BoxReveal delayProp={0.4}>
          <span>O</span>
        </BoxReveal>
        <BoxReveal delayProp={0.8}>
          <span>B</span>
        </BoxReveal>
        <BoxReveal delayProp={1.2}>
          <span>O</span>
        </BoxReveal>
        <BoxReveal delayProp={1.6}>
          <span>T</span>
        </BoxReveal>
        <BoxReveal delayProp={2.0}>
          <span>O</span>
        </BoxReveal>
        <BoxReveal delayProp={2.4}>
          <span>P</span>
        </BoxReveal>
        <BoxReveal delayProp={2.8}>
          <span>I</span>
        </BoxReveal>
        <BoxReveal delayProp={1.7}>
          <span>A</span>
        </BoxReveal>
      </div>
    </div>
  );
};

export default IntroModal;
