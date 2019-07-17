import React, { Component } from "react";
import "./contentSection.css";
import AboutMe from '../aboutMe/aboutMe';


class ContentSection extends Component {


  constructor() {
    super()
    this.state = {
      displayedTable: "AboutMe",
    }

  }
  renderComponent() {
    switch (this.state.displayedTable) {
      case "AboutMe":
        return <AboutMe />
      // case "ShowPlayers":
      //   return < />
      default:
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

