import React, { useState, ReactNode } from "react";
import { Box } from "@mui/material";
import { useDrop } from "react-dnd";

// types for the props
interface EatInsectProps {
  onDrop?: () => void;
  children?: ReactNode;
}

const EatInsect: React.FC<EatInsectProps> = ({ onDrop, children }) => {
  const [dropped, setDropped] = useState(false);

  const [, dropRef] = useDrop({
    accept: "insectContainer",
    drop: () => {
      setDropped(true);
      if (onDrop) {
        onDrop();
      }
      return { name: "mouth" };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <Box
      component={"div"}
      ref={dropRef}
      sx={{
        width: 70,
        height: 40,
        borderRadius: "100rem",
        backgroundColor: "transparent",
        position: "absolute",
        bottom: 30,
        left: "43%",
      }}
      className={dropped ? "bounce-out" : ""}
    >
      {children}
    </Box>
  );
};

export default EatInsect;
