import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import owlImage from '../assets/owl/Owl.png';
import eyeImage from '../assets/owl/eye.png';
import useWindowWidth from '../hooks/useWindowWidth';

const Owl = ({ eyePosition, selectedInsect, onInsectEat }) => {
  const windowWidth = useWindowWidth();
  const [imageSize, setImageSize] = useState(160);

  useEffect(() => {
    const newSize = Math.max(100, (windowWidth / 768) * 160);
    setImageSize(newSize);
  }, [windowWidth]);

  const baseEyePositionLeft = { top: '65%', left: '35%' };
  const baseEyePositionRight = { top: '62%', left: '70%' };

  return (
    <div className="relative flex flex-col justify-center items-center h-72">
      <img
        src={owlImage}
        alt="Owl"
        className="object-contain"
        style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
      />

      {/* Left Eye */}
      <img
        src={eyeImage}
        alt="Owl Left Eye"
        className="absolute"
        style={{
          width: `${imageSize * 0.2}px`,
          height: `${imageSize * 0.2}px`,
          top: baseEyePositionLeft.top,
          left: baseEyePositionLeft.left,
          transform: `translate(-50%, -50%) translate(${eyePosition.x}px, ${eyePosition.y}px)`,
        }}
      />

      {/* Right Eye */}
      <img
        src={eyeImage}
        alt="Owl Right Eye"
        className="absolute"
        style={{
          width: `${imageSize * 0.2}px`,
          height: `${imageSize * 0.2}px`,
          top: baseEyePositionRight.top,
          left: baseEyePositionRight.left,
          transform: `translate(-50%, -50%) translate(${eyePosition.x}px, ${eyePosition.y}px)`,
        }}
      />
    </div>
  );
};

export default Owl;
