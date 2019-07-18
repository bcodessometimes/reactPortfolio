import React from 'react';
import './portfolio.css';
import "../contentSection/contentSection.css"
import Grassroots from '../../images/Grassroots.png';
import HarryPotter from '../../images/HarryPotter.png';
import DBP from '../../images/DBPuppy.png';

const Portfolio = props => (
    <div>
    <div className="contentHeader">Portfolio</div>
    <div className="contentBody">Click the images below to check out some of my projects!</div>
    <div className="contentAccent">Last Updated July 18th 2019</div>
    <br></br>
    <div className="portfolioSubHeader">Grassroots</div>
    <a href="https://whispering-lowlands-40011.herokuapp.com/">
    <img className="portfolioImage" src={Grassroots} alt="grass"/>
    </a>   
    <div className="contentBody">This was a group project, my portion was front end design, HTML, and CSS.</div>
    <a className="contentBody" href="https://github.com/dansirdan/suave-group-2">Checkout the code here!</a>
    <br></br>
    <div className="portfolioSubHeader">Guessing Game</div>
    <a href="https://harry-potter-memory-game1234.herokuapp.com/">
    <img className="portfolioImage" src={HarryPotter} alt="harry"/>
    </a>
    <div className="contentBody">The objective of this assignment was to use React to make a dynamic memory game.</div>
    <a className="contentBody" href="https://github.com/beccapotter12/clickygame">Checkout the code here!</a>

    <br></br>
    <div className="portfolioSubHeader">Doodle Belle Puppy</div>
    {/* There will be a link here once the project is complete */}
    <img className="portfolioImage" src={DBP} alt="doodle"/>
    <div className="contentBody">INCOMPLETE This was a group project, my portion was a React front end using JSX, HTML, and CSS</div>
    <a className="contentBody" href="https://github.com/beccapotter12/DoodleBellePuppy">Checkout the code here!</a>


    </div>
);

export default Portfolio;