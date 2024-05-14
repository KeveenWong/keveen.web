import React from 'react';
import arrows from '../assets/arrows.png'; 
import z_key from '../assets/z_key.png';
import x_key from '../assets/x_key.png';
import mouse from '../assets/mouse.png';

const DesktopControlUI = () => {
    return (
        <div >
            <p className="pokemon-gameboy-font" style={{fontSize: '24px'}}>
                <img src={arrows} alt="Arrow" style={{ verticalAlign: 'middle' }}/> to highlight icons/menu items
            </p>
            <p className="pokemon-gameboy-font" style={{fontSize: '24px'}}>
                <img src={z_key} alt="Z" style={{ verticalAlign: 'middle' }}/> to select 
            </p>
            <p className="pokemon-gameboy-font" style={{fontSize: '24px'}}>
                <img src={x_key} alt="X" style={{ verticalAlign: 'middle' }}/> to open/close menu
            </p>
            <p className="pokemon-gameboy-font" style={{fontSize: '24px'}}>
                <img src={mouse} alt="Mouse" style={{ verticalAlign: 'middle' }}/> to interact with page as normal
            </p>
            <div style={{textAlign: 'center', marginBottom: '40px'}}>
                <p className="pokemon-gameboy-font" style={{fontSize: '16px'}}>(Website still in production, other pages still in development)</p>
            </div>
        </div> 
    );
};

export default DesktopControlUI;
