import { Typography } from "@material-ui/core";
import React from "react";

import monster from "../ills/monster.svg";

import Grid from "@material-ui/core/Grid";
function About(props) {
  return (
    <section id="about" style={{ backgroundColor: props.bgColor }}>
      <Grid container alignItems="center" className="aboutGrid">
        <Grid item xs={12} sm={12} className="aboutText">
          <div className="monsterBg">
            <img src={monster} alt="monster" className="monsterProfile" />
          </div>

          <Typography variant="h5" style={{ paddingTop: "20px" }}>
            Hello!
            <br /> I'm a web developer based in Haifa, Israel.
            <br /> I have a passion for web development and love
            <br /> to bring new ideas to the world.
            <br /> When i'm not coding you can find me
            <br /> surfing and exploring nature.
            <br /> Let's make crazy ideas into reality.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;
