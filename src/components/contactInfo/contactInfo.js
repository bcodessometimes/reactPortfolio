import React from 'react';
import './contactInfo.css';
import "../contentSection/contentSection.css"

const ContactInfo = props => (
    <div>
    <div className="contentHeader">Contact Me!</div>
    <div className="contentAccent">Due to the high number of spam callers the best way to reach me is via email</div>
    <br></br>

    <div className="contentSubHeader">Email - </div>
    <a className="contentBody" href="mailto:beccapotter12@gmail.com?Subject=I'd%20Like%20to%20Hire%20You" target="_top">beccapotter12@gmail.com</a>
    <br></br>

    <div className="contentSubHeader">Phone - </div>
    <a className="contentBody" href="tel:1-801-556-6736">801-556-6736</a>
    <br></br>

    <div className="contentSubHeader">Linkedin - </div>
    <a className="contentBody" href="https://www.linkedin.com/in/rebecca-potter-4a9931ab/">https://www.linkedin.com/in/rebecca-potter-4a9931ab/</a>
    <br></br>

    <div className="contentSubHeader">GitHub - </div>
    <a className="contentBody" href="https://github.com/beccapotter12">https://github.com/beccapotter12</a>
    <br></br>

    <div className="contentSubHeader">Before You Go!</div>
    <div className="contentBody">I will put a last summary and words here for why someone should hire me. I will put a last summary and words here for why someone should hire me. I will put a last summary and words here for why someone should hire me. I will put a last summary and words here for why someone should hire me. I will put a last summary and words here for why someone should hire me. I will put a last summary and words here for why someone should hire me. I will put a last summary and words here for why someone should hire me. I will put a last summary and words here for why someone should hire me. I will put a last summary and words here for why someone should hire me. I will put a last summary and words here for why someone should hire me. I will put a last summary and words here for why someone should hire me.</div>

    </div>
);

export default ContactInfo;