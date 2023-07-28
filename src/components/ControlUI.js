import React, { useEffect, useRef } from 'react';
import '../css/controlUI.css'

const ControlUI = () => {
    const intervalId = useRef(null);

    const pressKey = (key) => {
      console.log(`Firing ${key}`); // Add this line
      const event = new KeyboardEvent('keydown', { key: key, bubbles: true });
      window.dispatchEvent(event);
    };

    const handleTouchEnd = () => {
        if (intervalId.current !== null) {
            clearInterval(intervalId.current);
            intervalId.current = null;
        }
    };

    const handleButtonClick = (key) => {
        pressKey(key);
    };

    useEffect(() => {
        document.addEventListener('touchend', handleTouchEnd);
        return () => {
            document.removeEventListener('touchend', handleTouchEnd);
        }
    }, []);

      const padStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        color: 'white',
    };

    const dpadRowStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };


    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
              <div id="dpad" style={padStyle}>
                  <button style={buttonStyle} onClick={() => pressKey('ArrowUp')}>&#9650;</button>
                  <div style={dpadRowStyle}>
                        <button style={buttonStyle} onClick={() => pressKey('ArrowLeft')}>&#9668;</button>
                        <button style={buttonStyle} onClick={() => pressKey('ArrowRight')}>&#9658;</button>
                  </div>
                  <button style={buttonStyle} onClick={() => pressKey('ArrowDown')}>&#9660;</button>
                  <div />
              </div>
              <div id="buttons" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                  <button onClick={() => handleButtonClick('z')}>A</button>
                  <button onClick={() => handleButtonClick('x')}>B</button>
              </div>
          </div>
          <div id="controls" style={{ display: 'flex', justifyContent: 'space-between', width: 100, marginTop: 20 }}>
              <button onClick={() => handleButtonClick('c')}>Start</button>
              <button>Select</button>
          </div>
      </div>
  );
};

export default ControlUI;
