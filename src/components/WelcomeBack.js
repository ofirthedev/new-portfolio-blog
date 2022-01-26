import React, { Component } from "react";
import welcomeback from "../ills/welcomeback.svg";
import Hidden from "@material-ui/core/Hidden";
export class WelcomeBack extends Component {
  render() {
    return (
      <Hidden only={["xs"]}>
        <div className="welcome">
          <img src={welcomeback} alt="welcome" className="wbimg" />
        </div>
      </Hidden>
    );
  }
}

export default WelcomeBack;
