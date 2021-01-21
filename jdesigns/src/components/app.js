import React, { Component } from "react";

import SvgLogo2 from "./logo";
import Hero from "./homePage";
import HeaderButtons from "./headerButtons";

class App extends Component {
  render() {
    return (
      <div>
        <SvgLogo2/>
        <HeaderButtons />
        <Hero/>
      </div>
    );
  }
}

export default App;
