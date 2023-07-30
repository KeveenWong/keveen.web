import './css/App.css';
import GameSelectionScreen from './components/GameSelectionScreen';
import background from './assets/sparkles.gif'
import MenuSelectionScreen from './components/MenuSelectionScreen';
import './assets/fonts.css';
import React, { useState } from 'react';
import ControlUI from './components/ControlUI';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh', // This makes sure the div takes up the full height of the viewport
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }}>
      <GameSelectionScreen disabled={isMenuOpen} />
      <MenuSelectionScreen isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div style={{marginBottom: '100px'}}> 
        <ControlUI />
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
