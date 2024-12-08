import React, { useState, useEffect } from 'react';


const Header = () => {
  const phrases = ['Digital World', 'Connected Future', 'Global Classroom']; // Add dynamic phrases
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [phrases.length]);

  return (
    <div className="pt-10 md:py-40 px-5 md:px-10 text-center items-center justify-around">
      
      <h1 className="font-ubuntu font-bold text-2xl md:text-4xl text-justify max-w-80 md:max-w-full leading-normal tracking-tighter">
      Transforming University Life with EduSphere{' '}
        <span className="bg-green-600 p-1 text-white transition-all duration-500 ease-in-out">
          {phrases[index]}
        </span>
      </h1>
      <p>Revolutionize your campus experience with seamless access to academic resources, streamlined hostel booking, and rewards with Archway tokens."</p>
    </div>
  );
};

export default Header;
