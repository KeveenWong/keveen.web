import React, { useState, useEffect } from "react";
import background from '../assets/sparkles.gif';
import spaceblack from '../assets/space-black.png'
import earth from '../assets/space-earth.png'
import pokemonbw from '../assets/pokemon-bw.webp'
import smogcity from '../assets/smogcity.png'
import forest from '../assets/forest.jpg'

import '../css/imageCarousel.css'; 


const ImageCarousel = () => {
  const images = [
    background,
    spaceblack,
    earth,
    pokemonbw,
    smogcity,
    forest
    // Add more image URLs here
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const changeBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  const handleKeyDown = event => {
    if (event.key === 'c') {
      changeBackgroundImage();
    }
  };
    
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="background-image" style={{ backgroundImage: `url(${currentImage})` }} />
      {/* Add other components/content specific to the ImageCarousel */}
    </div>
  );
};

export default ImageCarousel;
