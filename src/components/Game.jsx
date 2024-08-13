import React, { useState, useRef } from "react";
import Owl from "./Owl";
import NavBar from "./NavBar";
import OptionButton from "./OptionButton";
import NavigationArrows from "./NavigationArrows";
import useWindowWidth from "../hooks/useWindowWidth";
import beetleImg from "../assets/insects/Beetle.png";
import waspImg from "../assets/insects/Wasp.png";
import antImg from "../assets/insects/Ant.png";
import Draggable from "react-draggable";

const Game = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [insects, setInsects] = useState([]);
  const [selectedInsect, setSelectedInsect] = useState(null);
  const [isDragging, setIsDragging] = useState(false); 
  const owlContainerRef = useRef(null); 
  const [insectCounts, setInsectCounts] = useState({
    beetle: 5,
    wasp: 5,
    ant: 5,
  });
  const owlEyePosition = useRef({ x: 0, y: 0 });
  const width = useWindowWidth();

  const addInsect = (type) => {
    // Check if the counter for the specific insect type is greater than 0
    if (insectCounts[type] <= 0) {
      alert(`You can only add up to 5 ${type}s.`);
      return; // Do not add more insects of this type
    }

    const newInsect = {
      id: Date.now(),
      type: type,
      image: getImageForType(type),
      position: { x: 100, y: 100 }, // Initial position
    };
    setInsects([...insects, newInsect]);
    setInsectCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] - 1,
    }));
    setSelectedInsect(newInsect);
  };

  const getImageForType = (type) => {
    switch (type) {
      case "beetle":
        return beetleImg;
      case "wasp":
        return waspImg;
      case "ant":
        return antImg;
      default:
        return null;
    }
  };

  const handleInsectClick = (insect) => {
    setSelectedInsect(insect);
  };

  const handleStartDrag = () => {
    setIsDragging(true); // Set dragging state to true
  };

  const handleStopDrag = (e, data, id) => {
    setIsDragging(false); // Set dragging state to false after drag ends
    handleInsectDrag(e, data, id); // Update insect position after drag ends

    // Check if the insect is dropped near the center of the owl's container
    const owlContainerElement = owlContainerRef.current;
    if (owlContainerElement) {
      const containerRect = owlContainerElement.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;

      const distance = Math.sqrt(
        Math.pow(containerCenterX - (data.x + containerRect.left), 2) +
          Math.pow(containerCenterY - (data.y + containerRect.top), 2)
      );

      if (distance < 50) {
        // Adjust the distance threshold as needed
        handleInsectEat(id, selectedInsect.type);
      }
    }
  };

  const handleInsectDrag = (e, data, id) => {
    // Update the position of the dragged insect in the state
    const updatedInsects = insects.map((insect) =>
      insect.id === id
        ? { ...insect, position: { x: data.x, y: data.y } }
        : insect
    );
    setInsects(updatedInsects);
    const distance = Math.sqrt(
      Math.pow(owlEyePosition.current.x - data.x, 2) +
      Math.pow(owlEyePosition.current.y - data.y, 2)
    );
    console.log(`Distance between eye and insect: ${distance}`);
    // Update the eye position of the owl to follow the insect in real-time
    setEyePosition({ x: data.x / 20, y: data.y / 20 });
  };

  const handleInsectEat = (id, type) => {
    setInsects(insects.filter((insect) => insect.id !== id));
    setInsectCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1, // Increment the count back when insect is "eaten"
    }));
  };

  return (
    <div
      className={`min-h-screen font-sans flex bg-main-bg bg-cover bg-center flex-col  ${
        isDragging ? "no-cursor" : ""
      }`}
      style={{ width: width < 768 ? "100%" : "100%", margin: "0 auto" }}
    >
      <NavBar />

      <div className="flex justify-center mt-8">
        <OptionButton
          label={`Beetle (${insectCounts.beetle})`}
          image={beetleImg}
          onClick={() => addInsect("beetle")}
        />
        <OptionButton
          label={`Wasp (${insectCounts.wasp})`}
          image={waspImg}
          onClick={() => addInsect("wasp")}
        />
        <OptionButton
          label={`Ant (${insectCounts.ant})`}
          image={antImg}
          onClick={() => addInsect("ant")}
        />
      </div>

      <div
        ref={owlContainerRef}
        className="relative flex-grow flex items-center justify-center max-h-screen"
      >
        <Owl eyePosition={eyePosition} />
      </div>
      <div className="flex max-h-screen">
        {insects.map((insect) => (
          <Draggable
            key={insect.id}
            position={insect.position}
            onStart={handleStartDrag}
            onDrag={(e, data) => handleInsectDrag(e, data, insect.id)}
            onStop={(e, data) => handleStopDrag(e, data, insect.id)}
          >
            <img
              src={insect.image}
              alt={insect.type}
              className={`w-40 cursor-pointer object-contain ${
                isDragging && insect.id === selectedInsect?.id
                  ? "no-cursor"
                  : ""
              } `}
              onClick={() => handleInsectClick(insect)}
            />
          </Draggable>
        ))}
      </div>

      <NavigationArrows />
    </div>
  );
};

export default Game;
