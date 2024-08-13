import React from "react";
import useWindowWidth from '../hooks/useWindowWidth';

function OptionButton({ label, image, onClick,usedInsect }) {
  const width = useWindowWidth(); 

  // Determine button size based on window width
  const buttonSize = width > 1024 ? 'w-60 h-56' : width > 768 ? 'w-24 h-24' : 'w-72 h-60';
  const imageSize = width > 1024 ? 'w-48 h-40' : width > 768 ? 'w-16 h-16' : 'w-48 h-48';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center ${buttonSize} m-2 text-lg rounded-xl bg-gray-200 shadow-md hover:bg-gray-300 transition-all duration-200`}
    >
      {image && (
        <img
          src={image}
          alt={label}
          className={`${imageSize} mb-2 object-contain`}
        />
      )}
      <span className="font-inter text-[30px] font-normal leading-[36.31px] text-left">
        {label}  {usedInsect}
      </span>
    </button>
  );
}

export default OptionButton;
