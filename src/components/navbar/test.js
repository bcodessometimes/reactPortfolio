import React from "react";
import "./navbar.css";

const NavBar = props => (

  <div className="navBar">

    <div className="navBtn">
      <button onClick={() => props.setContent("AboutMe")}>
        <i className="far fa-user navBarText"></i>
        <p className="navBarText">About Me</p>
        </button>
    </div>

    <div className="navBtn" onClick={props.setContent("Resume")}>
      <i className="far fa-file navBarText"></i>
      <p className="navBarText">Resume</p>
    </div>

    <div className="navBtn" onClick={props.setContent("Portfolio")}>
      <i className="fas fa-laptop-code navBarText"></i>
      <p className="navBarText">Portfolio</p>
    </div>

    <div className="navBtn" onClick={props.setContent("ContactInfo")}>
        <i className="far far fa-envelope navBarText"></i>
        <p className="navBarText">Contact</p>
    </div>

  </div>
);

export default NavBar;