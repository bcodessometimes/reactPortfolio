import React from "react";
import "./infoSection.css";
import beach from '../../images/beach.png';
import profilePicture from '../../images/profilePicture.png';

const InfoSection = props => (
  <div className="infoSection"> 

    <div>
    <img className="infoImage" src={beach} alt="beach"/>
    </div>

    <div>
    <img className="profilePicture" src={profilePicture} alt="me"/>
    </div>

    <div className="infoSectionName">
    <p className="infoSectionTextLarge">Rebecca Potter</p>
    <p className="devTitle">Web Developer</p>
    </div>

    <div class="row">
    <div className="contactLinks" class="col">
        <a className="navLink" href="https://www.w3schools.com/html/">
            <p className="infoSectionText">Download CV <i class="far fa-file-alt"></i></p>
        </a>
    </div>
            
    <div className="contactLinks" class="col">
        <a className="navLink" href="https://www.w3schools.com/html/">
            <p className="infoSectionText">Contact Me <i class="fas fa-mobile-alt"></i></p>
        </a>
    </div>
  </div>

  </div>

);

export default InfoSection;