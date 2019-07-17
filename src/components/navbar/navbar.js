import React from "react";
import "./navbar.css";

const NavBar = props => (

  <div className="navBar">

    <div className="navBtn" onClick={props.setContent("AboutMe")}>
        <i class="far fa-user navBarText"></i>
        <p className="navBarText">About Me</p>
    </div>

    <div className="navBtn" onClick={props.setContent("Resume")}>
      <i class="far fa-file navBarText"></i>
      <p className="navBarText">Resume</p>
    </div>

    <div className="navBtn" onClick={props.setContent("Portfolio")}>
      <i class="fas fa-laptop-code navBarText"></i>
      <p className="navBarText">Portfolio</p>
    </div>

    <div className="navBtn" onClick={props.setContent("ContactInfo")}>
        <i class="far far fa-envelope navBarText"></i>
        <p className="navBarText">Contact</p>
    </div>

  </div>
);

export default NavBar;