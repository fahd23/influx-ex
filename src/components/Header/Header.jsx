import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header flex flex-jc-btwn flex-ai-center flex-wrap">
      <div className="flex flex-ai-center gap-2rem">
        <div className="plane flex flex-ai-center flex-jc-center">
          <i className="fa-solid fa-plane"></i>
        </div>
        <div>
          <h2 className="header-title">Analytics Dashboard</h2>
          <p className="header-descpriction">
            Dashboard is an online report where data from ecommerce to web
            analytics is displayed
          </p>
        </div>
      </div>
      <div className="flex gap-1rem">
        <button className="btn btn-star">
          <i className="fa-solid fa-star"></i>
        </button>
        <button className="btn btn-success flex flex-ai-center gap-1rem">
          <span className="plus-sign">+</span> <span>Create New</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
