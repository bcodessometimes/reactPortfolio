import React from "react";
import "./navbar.css";
// import AboutMe from '../aboutMe/aboutMe';
// import Resume from '../resume/resume';
// import Portfolio from '../portfolio/portfolio';
// import ContactInfo from '../contactInfo/contactInfo';

// const navigation = {
//     "AboutMe": <AboutMe />,
//     "Resume": <Resume />,
//     "Portfolio": <Portfolio />,
//     "ContactInfo": <ContactInfo /> 
// }

const NavBar = props => (
  
  <div className="navBar"> 
  
    <div className="navBtn">
    <a className="navLink" href="https://www.w3schools.com/html/">
    <i class="far fa-user navBarText"></i>
    <p className="navBarText">About Me</p>
    </a>
    </div>

    <div className="navBtn">
    <a className="navLink" href="https://www.w3schools.com/html/">
    <i class="far fa-file navBarText"></i>
    <p className="navBarText">Resume</p>
    </a>
    </div>

    <div className="navBtn">
    <a className="navLink" href="https://www.w3schools.com/html/">
    <i class="fas fa-laptop-code navBarText"></i>
    <p className="navBarText">Portfolio</p>
    </a>
    </div>

    <div className="navBtn">
    <a className="navLink" href="https://www.w3schools.com/html/">
    <i class="far far fa-envelope navBarText"></i>
    <p className="navBarText">Contact</p>
    </a>
    </div>

  </div>
);

export default NavBar;