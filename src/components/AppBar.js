import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'
import Drawer from "./Drawer";
import Bounce from "react-reveal/Bounce";
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <Drawer />
      <Hidden only={["xs"]}>
        <Bounce top>
          <div className={classes.root}>
            <div className="appBar">
              <Button size="large" color="inherit" href="#home">
                Home
              </Button>

              <Button href="#about" size="large" color="inherit">
                About
              </Button>

              <Button href="#work" color="inherit" size="large">
                Latest Work
              </Button>

              <Button href="#contact" color="inherit" size="large">
                Contact
              </Button>
              <Button  color="inherit" size="large">
                <Link to="/blog" color="inherit" size="large">
                  Blog
                </Link>
              </Button>

            </div>
          </div>
        </Bounce>
      </Hidden>
    </div>
  );
}
