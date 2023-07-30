import React, { useEffect, useRef } from 'react';
import '../css/controlUI.css'

const ControlUI = () => {
    const intervalId = useRef(null);

    const pressKey = (key) => {
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
      marginRight: '170px',
      zIndex: '1'
  };
  
  const buttonStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      color: 'white',
      width: '60px',
      height: '60px',
      borderRadius: '10px',
      borderColor: 'white',
  };

  const rectButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '10px',
    borderRadius: '20px'
  }

  const centerButtonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    width: '70px',
    height: '70px',
    borderRadius: '10px',
    borderColor: 'white',
    borderWidth: '2px',
    borderStyle: 'solid',
  };

  const centerButtonStyle2 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    width: '71px',
    height: '71px',
    borderRadius: '10px',
  };

  const baseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4bebb',
    margin: '-20px 0px',
    width: '35em',
    height: '25em',
    opacity: '50%',
    zIndex: '0',
    position: 'absolute', // added this
}


    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', margin: '5em 0',}}>
        <div style={baseStyle} />
          <div style={{ display: 'flex' }}>
            <div id="dpad" style={padStyle} >
              <div style={{gridRow: '2', gridColumn: '2'}}>
                  <div style={centerButtonStyle}></div>
              </div>
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
                  <div style={centerButtonStyle2}></div>
              </div>
          </div>
          <div id="buttons" style={{ transform: 'rotate(75deg)', marginRight: '60px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(-100deg)' }}>
              <button className='circleRed' onClick={() => handleButtonClick('z')}></button>
              <div className='console-gameboy-font' style={{ transform: 'rotate(0deg)', fontSize:'30px', marginTop: '10px', color: '#494786' }}>A</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(-100deg)', padding: '0px 0px' }}>
              <button className='circleRed' onClick={() => handleButtonClick('x')}></button>
              <div className='console-gameboy-font' style={{ transform: 'rotate(0deg)', fontSize:'30px', marginTop: '10px', color: '#494786' }}>B</div>
            </div>
          </div> 
          </div>
          <div id="controls" style={{ display: 'flex', justifyContent: 'space-between', width: 100, marginTop: 20, marginRight: 60, transform: 'rotate(-5deg)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(-15deg)', marginRight: '10px'  }}>
              <button style={rectButtonStyle} onClick={() => handleButtonClick('c')}></button>
              <div className='console-gameboy-font' style={{ fontSize:'20px', marginTop: '5px', color: '#494786' }}>Select</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'rotate(-15deg)' }}>
              <button style={rectButtonStyle} onClick={() => handleButtonClick('x')}></button>
              <div className='console-gameboy-font' style={{ fontSize:'20px', marginTop: '5px', color: '#494786' }}>Start</div>
            </div>
          </div>
      </div>
  );
};

export default ControlUI;
