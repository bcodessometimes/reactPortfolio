import React, { Component } from "react";
import "./contentSection.css";
import AboutMe from '../aboutMe/aboutMe';
import Resume from '../resume/resume';
import Portfolio from '../portfolio/portfolio';
import ContactInfo from '../contactInfo/contactInfo';


class ContentSection extends Component {

  constructor(props) {
    super(props)
    this.state = {}

  }
  renderComponent() {
    switch (this.props.fillContent) {
      case "AboutMe":
        return <AboutMe />
      case "Resume":
        return <Resume />
      case "Portfolio":
        return <Portfolio />
      case "ContactInfo":
        return <ContactInfo />
      default:
        return <AboutMe />
    }
  }

  render() {
    return (
      <div className="contentSection">
        {this.renderComponent()}
      </div>
    )
  }
}

export default ContentSection;

