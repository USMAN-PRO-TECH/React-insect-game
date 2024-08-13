import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

import OwlImage from "../assets/owl/Owl.png";
import Lefteye from "../assets/owl/lefteye.png";
import Righteye from "../assets/owl/righteye.png";

import { useMyContext } from "../context/Context";
import Mouth from "./EatInsect";

const Owl: React.FC = () => {
  const { currentInsectPosition: insectPosition, moveEye } = useMyContext();

  const leftEyeRef = useRef<HTMLImageElement | null>(null);
  const rightEyeRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (insectPosition) {
      if (leftEyeRef.current) {
        moveEye(leftEyeRef.current, insectPosition);
      }
      if (rightEyeRef.current) {
        moveEye(rightEyeRef.current, insectPosition);
      }
    }
  }, [insectPosition, moveEye]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <img src={OwlImage} className="main-image" alt="Owl face" />
        <img
          src={Lefteye}
          ref={leftEyeRef}
          className="eye-image eye-left"
          alt="owl left eye"
        />
        <img
          src={Righteye}
          ref={rightEyeRef}
          className="eye-image eye-right"
          alt="owl right eye"
        />
        <Mouth />
      </Box>
    </Box>
  );
};

export default Owl;
