import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Info";
import WorkIcon from "@material-ui/icons/Work";
import ContactIcon from "@material-ui/icons/ContactMail";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const listarr = ["Home", "About", "Work", "Contact"];
  function getIcon(text) {
    switch (text) {
      case "Home":
        return <HomeIcon />;
      case "About":
        return <AboutIcon />;
      case "Work":
        return <WorkIcon />;
      case "Contact":
        return <ContactIcon />;
      default:
    }
  }
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listarr.map((text, index) => (
          <a href={"#" + text.toLowerCase()} key={text}>
            <ListItem button>
              <ListItemIcon>{getIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <div className="mobileapp">
      <Hidden smUp={true}>
        <IconButton
          edge="start"
          size="medium"
          className={classes.menuButton}
          color="inherit"
          onClick={toggleDrawer("right", true)}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </Hidden>
    </div>
  );
}
