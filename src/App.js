import './css/App.css';
import GameSelectionScreen from './components/GameSelectionScreen';
import background from './assets/sparkles.gif'
import MenuSelectionScreen from './components/MenuSelectionScreen';
import './assets/pokemon-gameboy-font.css';
import React, { useState } from 'react';
import Controls from './components/ControlUI';

function App() {

  // const [activeKey, setActiveKey] = useState(null);

  // const handleMove = (event) => {
  //   let key;
  //   switch (event.direction) {
  //     case 'LEFT':
  //       key = 'ArrowLeft';
  //       break;
  //     case 'RIGHT':
  //       key = 'ArrowRight';
  //       break;
  //     case 'UP':
  //       key = 'ArrowUp';
  //       break;
  //     case 'DOWN':
  //       key = 'ArrowDown';
  //       break;
  //     default:
  //       return;
  //   }
  
  //   const keyboardEvent = new KeyboardEvent('keydown', { key });
  //   window.dispatchEvent(keyboardEvent);
  // };

  // const handleStop = (event) => {
    
  // };

  // const handleButtonPress = (key) => {
  //   console.log('handleButtonPress:', key)
  //   setActiveKey(key);
  // };

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
      <GameSelectionScreen />
      <MenuSelectionScreen />
      {/* <div style={{marginBottom: '100px'}}> 
        <Controls onMove={handleMove} onStop={handleStop} onButtonPress={handleButtonPress}/>
      </div> */}
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <p className="pokemon-gameboy-font" style={{fontSize: '24px'}}>Use Arrow Keys to highlight icons/menu items, Z to select, X to open Menu</p>
        <p className="pokemon-gameboy-font" style={{fontSize: '16px'}}>(You can also just click/tap like normal)</p>
        <p className="pokemon-gameboy-font" style={{fontSize: '16px'}}>(Website still in production, other pages still in development)</p>

      </div>
    </div>

  );
}


export default App;
