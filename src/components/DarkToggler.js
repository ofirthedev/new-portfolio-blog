import React, { useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import Tooltip from "@material-ui/core/Tooltip";

export default function DarkToggler(props) {
  const [state, setState] = React.useState({
    checkedA: false,
  });
  useEffect(() => {
    props.darkModeHandler(state);
  }, [state, props]);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        paddingTop: "25px",
        left: "15px",
      }}
    >
      <Tooltip title="Dark Mode">
        <NightsStayIcon />
      </Tooltip>

      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}
