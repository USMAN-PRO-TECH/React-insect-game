import { Box } from "@mui/material";
import React, { useState } from "react";
import { useDrag, DragSourceMonitor, } from "react-dnd";
import { useMyContext } from "../context/Context";

interface InsectProps {
  type: string;
  id: number;
  imgSrc: string;
}
interface DropResult {
  name: string; 
}

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 2000), // Adjust the range as needed
  y: Math.floor(Math.random() * 800), // Adjust the range as needed
});

const Insect: React.FC<InsectProps> = ({ type, id, imgSrc }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>(getRandomPosition());

  const { handleDrag: onDrag, handleInsectEat: onEat } = useMyContext();

  const [{ isDragging }, dragRef] = useDrag({
    type: "insectContainer",
    item: { type: "insectContainer", position },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
      delta: monitor.getDifferenceFromInitialOffset(),
    }),
    end: (item, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult() as DropResult;
      if (dropResult && dropResult.name === "mouth") {
        onEat(id); // Assuming id is expected as a string in onEat function
      } else {
        const delta = monitor.getDifferenceFromInitialOffset();
        if (delta) {
          const newX = position.x + delta.x;
          const newY = position.y + delta.y;
          setPosition({ x: newX, y: newY });
        }
      }
    },
  });
  const handleDrag = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    onDrag(rect.x + rect.width / 2, rect.y + rect.height / 2);
  };

  return (
    <Box
      component={"div"}
      ref={dragRef}
      onMouseMove={handleDrag}
      onTouchMove={handleDrag}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
    >
      <img src={imgSrc} alt={`${type} Insect`} className="insect-image" />
      
    </Box>
  );
};

export default Insect;
