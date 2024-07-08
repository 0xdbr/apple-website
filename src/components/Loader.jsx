import { Html } from '@react-three/drei';
import React from 'react';

const Loader = () => {
  return (
    <Html>
      {/* 
       * Create a container div with absolute positioning and full width/height
       * Use flex to center the content vertically and horizontally
       */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {/* 
         * Create a centered div with rounded corners to display the loading text
         * Set the width and height to 10vw (10% of the viewport width)
         */}
        <div className="w-[10vw] h-[10vw] rounded-full">
          Loading...
        </div>
      </div>
    </Html>
  );
};

export default Loader;