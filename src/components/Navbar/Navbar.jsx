import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav flex flex-jc-btwn flex-ai-center">
      <div className="flex flex-ai-center">
        <i class="fa-brands fa-react nav-logo"></i>
        <h1 className="title">React</h1>
      </div>
      <div className="text-align-right">
        <h3 className="user-name">John Wick</h3>
        <h5 className="user-role">Developer</h5>
      </div>
    </nav>
  );
};

export default Navbar;
