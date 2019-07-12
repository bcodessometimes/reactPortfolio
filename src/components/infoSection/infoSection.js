import React from "react";
import "./infoSection.css";
import topImage from '../../images/topImage.png';

const InfoSection = props => (
  <div className="infoSection"> 

    <div>
    <img className="infoImage" src={topImage} alt="beach"/>
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