// src/components/NavigationArrows.js
import React from "react";
import Left from '../assets/svgs/Left';
import Right from '../assets/svgs/Right';

function NavigationArrows() {
  return (
    <div className="flex justify-between items-center px-80 py-32 rounded-custom">
 <button className="px-4 py-6 text-lg rounded-custom flex flex-col align-middle items-center bg-gray-100"> 
      <Left className="mr-8 mb-2" />
      <span>Back</span>
      </button>
      <button className="px-4 py-6 text-lg rounded-custom bg-gray-100"> 
      <Right className="mr-2" />
      <span className="mt-2">Next</span>
      </button>
    </div>
  );
}

export default NavigationArrows;
