import React, { useState, useEffect } from 'react';
import image1 from '/Assets/Preloader/capital.png';
import image2 from '/Assets/Preloader/gudeg.png';
import './preloader.css'

const Preloader = () => {
  const [displayImage, setDisplayImage] = useState(image1);
  const [displayText, setDisplayText] = useState("Fun Fact: Jogja was once the capital of Indonesia");

  useEffect(() => {
    const toggleContent = () => {
      if (displayImage === image1) {
        setDisplayImage(image2);
        setDisplayText("Fun Fact: Gudeg is not the name of a food");
      } else {
        setDisplayImage(image1);
        setDisplayText("Fun Fact: Jogja was once the capital of Indonesia");
      }
    };

    const intervalId = setInterval(toggleContent, 2000);
    return () => clearInterval(intervalId);
  }, [displayImage]);

  return (
    <div className='w-screen h-screen bg-[#222222] flex flex-col justify-center items-center p-16'>
      <div className='mt-[-50px] flex flex-col justify-center items-center'>
        <img className='w-[250px] lg:w-[350px]' src={displayImage} alt="" />
        <div className='text-white text-center lg:text-[20px]'>
          <p>{displayText}</p>
        </div>
      </div>
      
      <div className="container_loading">
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
      </div>
    </div>
  );
};

export default Preloader;

