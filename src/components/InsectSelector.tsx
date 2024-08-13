import React from "react";
import { Box } from "@mui/material";
import { insectsData } from "../data/insectsData";
import InsectButton from "./InsectButton";

// types for the insect data
interface InsectData {
  imgSrc: string;
  name: string;
}

const InsectSelector: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {insectsData.map((insect: InsectData) => (
        <InsectButton
          key={insect.name}
          imgSrc={insect.imgSrc}
          name={insect.name}
        />
      ))}
    </Box>
  );
};

export default InsectSelector;
