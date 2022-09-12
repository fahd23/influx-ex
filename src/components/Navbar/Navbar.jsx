import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-tab flex flex-jc-btwn flex-ai-center">
      <div className="flex flex-ai-center">
        <i className="fa-brands fa-react nav-logo"></i>
        <h1 className="title">React</h1>
      </div>
      <div className="text-align-right flex flex-d-column">
        <p className="user-name">John Wick</p>
        <p className="user-role">Developer</p>
      </div>
    </nav>
  );
};

export default Navbar;
