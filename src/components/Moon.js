import React, { Component } from "react";
import moon from "../ills/moon.svg";
export class Moon extends Component {
  render() {
    return (
      <div>
        <img alt="moon" className="moon" src={moon} />
      </div>
    );
  }
}

export default Moon;
