import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>Built with 🤍 in React -2021-</div>
        <div>
          <a href="https://www.linkedin.com/in/ofirthedev/">
            <LinkedInIcon htmlColor="grey" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100004539256630">
            <FacebookIcon htmlColor="grey" />
          </a>
          <a href="https://www.instagram.com/ofirco14/">
            <InstagramIcon htmlColor="grey" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
