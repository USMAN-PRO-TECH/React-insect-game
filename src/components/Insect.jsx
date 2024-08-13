import React, { useState } from 'react';
import Owl from './Owl';
import Insect from './Insect';
import NavBar from "./NavBar";
import OptionButton from "./OptionButton";
import NavigationArrows from "./NavigationArrows";
import useWindowWidth from '../hooks/useWindowWidth'; 
import beetleImg from '../assets/insects/Beetle.png';
import waspImg from '../assets/insects/Wasp.png';
import antImg from '../assets/insects/Ant.png';

const Game = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [insects, setInsects] = useState([]);
  const [selectedInsect, setSelectedInsect] = useState(null);

  const width = useWindowWidth();

  const addInsect = (type) => {
    const newInsect = {
      id: Date.now(),
      type: type,
      image: getImageForType(type),
    };
    setInsects([...insects, newInsect]);
    setSelectedInsect(newInsect);
  };

  const getImageForType = (type) => {
    switch (type) {
      case 'beetle':
        return beetleImg;
      case 'bee':
        return beeImage;
      case 'wasp':
        return waspImg;
      case 'ant':
        return antImg;
      default:
        return null;
    }
  };

  const handleInsectClick = (insect) => {
    setSelectedInsect(insect);
  };

  const handleInsectDrag = (position) => {
    setEyePosition(position);
  };

  const handleInsectDrop = (type) => {
    // Handle logic for insect being "eaten"
  };

  return (
    <div
      className={`min-h-screen font-sans flex bg-main-bg bg-cover bg-center flex-col ${width < 768 ? 'bg-blue-400' : 'bg-green-400'}`}
      style={{ width: width < 768 ? '100%' : '80%', margin: '0 auto' }} 
    >
      <NavBar />

      <div className="flex justify-center mt-8">
        <OptionButton label="Beetle" image={beetleImg} onClick={() => addInsect('beetle')} />
        <OptionButton label="Wasp" image={waspImg} onClick={() => addInsect('wasp')} />
        <OptionButton label="Ant" image={antImg} onClick={() => addInsect('ant')} />
      </div>

      <div className="relative flex-grow flex flex-col items-center justify-center">
        <Owl eyePosition={eyePosition} selectedInsect={selectedInsect} onInsectEat={handleInsectDrop} />
        <div className="flex space-x-4 mt-4 relative">
          {insects.map((insect) => (
            <Insect
              key={insect.id}
              id={insect.id}
              type={insect.type}
              image={insect.image}
              onDrag={handleInsectDrag}
              onDrop={handleInsectDrop}
            />
          ))}
        </div>
      </div>

      <NavigationArrows />
    </div>
  );
};

export default Game;
