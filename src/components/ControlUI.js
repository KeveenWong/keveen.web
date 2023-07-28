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
      display: 'grid',
      gridTemplateRows: 'repeat(3, 35%)',
      gridTemplateColumns: 'repeat(3, 35%)',
      gap: '0px', // Adjust to space buttons evenly
      placeItems: 'center',
      borderRadius: '5px',
      width: '150px',
      height: '150px',
      margin: '50px 50px'
  };
  
  const buttonStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      color: 'violet',
      width: '60px',
      height: '60px',
      borderRadius: '10px',
      borderColor: 'violet'
  };

  const centerButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    width: '70px',
    height: '70px',
    borderRadius: '10px',
};

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            <div id="dpad" style={padStyle}>
              <div style={{gridRow: '1', gridColumn: '2'}}>
                  <button style={buttonStyle} onClick={() => pressKey('ArrowUp')}>&#9650;</button>
              </div>
              <div style={{gridRow: '2', gridColumn: '1'}}>
                  <button style={buttonStyle} onClick={() => pressKey('ArrowLeft')}>&#9668;</button>
              </div>
              <div style={{gridRow: '2', gridColumn: '3'}}>
                  <button style={buttonStyle} onClick={() => pressKey('ArrowRight')}>&#9658;</button>
              </div>
              <div style={{gridRow: '3', gridColumn: '2'}}>
                  <button style={buttonStyle} onClick={() => pressKey('ArrowDown')}>&#9660;</button>
              </div>
              <div style={{gridRow: '2', gridColumn: '2'}}>
                  <div style={centerButtonStyle}></div>
              </div>
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
