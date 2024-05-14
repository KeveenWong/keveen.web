import './css/App.css';
import GameSelectionScreen from './components/GameSelectionScreen';
import background from './assets/sparkles.gif';
import MenuSelectionScreen from './components/MenuSelectionScreen';
import './assets/fonts.css';
import React, { useState } from 'react';
import ControlUI from './components/ControlUI';
import DesktopControlUI from './components/DesktopControlUI'; // Import the desktop component
import ImageCarousel from './components/ImageCarousel';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='App screen'>
      <ImageCarousel />
      <GameSelectionScreen disabled={isMenuOpen} />
      <MenuSelectionScreen isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      {/* Conditionally render ControlUI or DesktopControlUI based on screen size */}
      <div style={{}}>
        {window.innerWidth <= 768 ? <ControlUI /> : <DesktopControlUI />}
      </div>
      {/* <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <p className="pokemon-gameboy-font" style={{fontSize: '24px'}}>Use Arrow Keys to highlight icons/menu items, Z to select, X to open Menu</p>
        <p className="pokemon-gameboy-font" style={{fontSize: '16px'}}>(You can also just click/tap like normal)</p>
        <p className="pokemon-gameboy-font" style={{fontSize: '16px'}}>(Website still in production, other pages still in development)</p>

      </div> */}
    </div>
  );
}

export default App;
