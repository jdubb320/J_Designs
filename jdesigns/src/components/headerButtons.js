import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import "./headerButtons.css";

class HeaderButtons extends Component {
  render() {
    const style = {
        textAlign: "right"
    };
    return (
      <div style={style}>
        <Button variant="outline-primary">
          ABOUT
        </Button>
        <Button variant="outline-primary">
          CONTACT
        </Button>
        <Button variant="outline-primary">
          PRICING
        </Button>
      </div>
    );
  }
}

export default HeaderButtons;
