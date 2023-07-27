import React from 'react';
import { Joystick } from 'react-joystick-component';

const Controls = ({ onMove, onStop, onButtonPress }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Joystick 
        size={100} 
        baseColor="red" 
        stickColor="blue" 
        throttle={100}
        move={onMove} 
        stop={onStop}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px', marginTop: '20px' }}>
        <button onClick={() => onButtonPress('z')}>A</button>
        <button onClick={() => onButtonPress('x')}>B</button>
      </div>
      <button onClick={() => onButtonPress('c')} style={{ marginTop: '20px' }}>Start</button>
    </div>
  );
};

export default Controls;
