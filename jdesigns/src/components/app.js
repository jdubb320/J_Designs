import React, { Component } from "react";

import SvgLogo2 from "./logo";
import Hero from "./homePage";
import HeaderButtons from "./headerButtons";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderButtons />
        <Hero/>
      </div>
    );
  }
}

export default App;
