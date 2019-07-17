import React from "react";
import "./aboutMe.css";
import "../contentSection/contentSection.css"


const AboutMe = props => (
  <div className="aboutMe">

  <div className="contentHeader"> 
    <p>About Me</p>
  </div>
  
  <div>
    <p className="contentSubHeader">Hello! I’m Rebecca Potter.</p>
    <p className="contentBody">Full Stack Web Developer from Utah. There will be a bunch more words here when I have the time to think about what I want to put here. There will be a bunch more words here when I have the time to think about what I want to put here. There will be a bunch more words here when I have the time to think about what I want to put here. There will be a bunch more words here when I have the time to think about what I want to put here. </p>
    <p className="contentBody">Age:.....27</p>
    <p className="contentBody">Located:.....Layton, Utah</p>
    <p className="contentBody">Seeking:.....Full Time Employment</p>
    <p className="contentBody">Relocation:.....Within the State</p>
  </div>

  <div className="contentHeader"> 
    <p>My Skills</p>
  </div>
  <div class="row">

    <div class="col">
  <p className="aboutMeSkills"><i class="fab fa-js-square"></i> Javascript </p>
  <p className="aboutMeSkills"><i class="fab fa-html5"></i> HTML </p>
  <p className="aboutMeSkills"><i class="fab fa-css3-alt"></i> CSS </p>
  <p className="aboutMeSkills"><i class="fab fa-react"></i> React </p>
    </div>
    <div class="col">
  <p className="aboutMeSkills"><i class="fas fa-database"></i> MySQL, Mongo, Sequelize </p>
  <p className="aboutMeSkills"><i class="fab fa-github"></i> GitHub </p>
  <p className="aboutMeSkills"><i class="fab fa-node-js"></i> Node </p>
    </div>

  </div>
  </div>
  

);

export default AboutMe;