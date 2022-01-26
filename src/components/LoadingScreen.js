import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import monster from "../ills/monster.svg";
import Box from "@material-ui/core/Box";
import Jump from "react-reveal/Jump";
export default function LoadingScreen(props) {
  return (
    <div className="loadingScreen">
      <Jump>
        <Box position="relative" display="inline-flex">
          <CircularProgress
            size="10em"
            variant="determinate"
            value={props.progress}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img src={monster} alt="monster" className="monster" />
          </Box>
        </Box>
      </Jump>
    </div>
  );
}
