import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import Astronaut from "../ills/astronaut.svg";
import Grid from "@material-ui/core/Grid";
import Typed from "react-typed";

export class Home extends Component {
  render() {
    const name = "<Ofir/>";
    // Can also be included with a regular script tag
    return (
      <section id="home">
        <Grid
          container
          direction="row"
          alignItems="center"
          className="homeGrid"
        >
          <Grid item xs={12} sm={6} className="homeText">
            <Typography variant="h2">I'm {name}</Typography>
            <Typography variant="h4">
              <Typed
                strings={[
                  "Nice to meet you (:",
                  "I am a web developer",
                  "Specializing in React.",
                ]}
                typeSpeed={100}
                backSpeed={110}
                loop
              ></Typed>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className="homeIllus">
            <img alt="astronaut" className="astronaut" src={Astronaut} />
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default Home;
