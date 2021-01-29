import React, { Component } from "react";
import axios from "axios";

import heroBackground from "../images/darkToneWithTechBackground.jpg";
import {ContactModal} from "./contactModal";

class Hero extends Component {
  render() {
    const style = {
      position: "fixed",
      top: 0,
      left: 0,
      minWidth: "100%",
      minHeight: "100%",
      maxWidth: "100%",
      height: "auto",
      zIndex: "-1"
    };

    const h1Style = {
      position: "relative",
      color: "white",
      textAlign: "left",
      fontSize: "7.813rem",
      margin: "1rem",
      padding: "1rem",
    };

    const h2Style = {
      position: "relative",
      color: "white",
      textAlign: "left",
      fontSize: "4.75rem",
      margin: "1rem",
      padding: "1rem",
    };

    const triggerText = "fuck";
    const onSubmit = (event) => {
      event.preventDefault(event);
      console.log(event.target.name.value);
      console.log(event.target.email.value);


    };

    return (
      <div style={style}>
        <img src={heroBackground} style={style} />
        <h1 style={h1Style}>Welcome to JDESIGNS</h1>
        <h2 style={h2Style}>
          I'm here to create your <br /> next website!
        </h2>
        <ContactModal triggerText={triggerText} onSubmit={onSubmit} />
      </div>
    );
  }
}

export default Hero;
