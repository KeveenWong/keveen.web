import React, { useState, useEffect, useRef } from 'react';
import '../assets/fonts.css'; 
import '../css/menuSelectionScreen.css';
import selectMenu from '../assets/menu_select.png';
import arrowIndicator from '../assets/select_arrow.png'

const MenuSelectionScreen = ({ isOpen, setIsOpen }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [prevFocusIndex, setPrevFocusIndex] = useState(0);
  const menuOptionsRef = useRef([]);
  const menuOptions = ['HOME', 'ABOUT', 'PROJECTS'];

  // Function to handle the "x" key press
  const handleKeyPress = (event) => {
    if (event.key === 'x') {
        setIsOpen(!isOpen);
        if (!menuVisible) {
        // Save the current focus index when the menu opens
        setPrevFocusIndex(highlightedIndex);
        // Focus on the menu when it opens
        setHighlightedIndex(0);
        setMenuVisible(true);
      } else {
        // Restore the focus to the previously focused index when the menu closes
        setHighlightedIndex(prevFocusIndex);
        setMenuVisible(false);
        // Return focus to the previously focused element
        menuOptionsRef.current[prevFocusIndex].focus();
      }
    } else if (menuVisible && event.key === 'ArrowUp') {
      // Handle arrow up key press for menu navigation
      setHighlightedIndex((prevIndex) => (prevIndex === 0 ? menuOptions.length - 1 : prevIndex - 1));
    } else if (menuVisible && event.key === 'ArrowDown') {
      // Handle arrow down key press for menu navigation
      setHighlightedIndex((prevIndex) => (prevIndex === menuOptions.length - 1 ? 0 : prevIndex + 1));
    }
  };

  // Add an event listener for the "x" key press and arrow key presses when the component mounts
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [menuVisible]); // Include menuVisible as a dependency to ensure the effect is updated when the menu opens/closes

  return (
    <div
      style={{
        position: 'absolute',
        top: '1%', 
        right: '0.5%', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        zIndex: 1, // Adjust overlay
      }}
    >
      {/* Hamburger icon to open the menu */}
      <div className='hamburger' onClick={() => setMenuVisible((prevState) => !prevState)}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Menu selection screen */}
      {menuVisible && (
        <div className="menu-selection-screen">
            <img 
            src={selectMenu} 
            alt="Menu Selection Screen"
            style={{
                width: '80%',
                paddingLeft: '20%',
                height: 'auto'
              }} 
            />

          {/* Highlighted menu item arrow indicator */}
          <img
            src={arrowIndicator}
            alt="Arrow Indicator"
            className="arrow-indicator"
            style={{
              position: 'absolute',
              top: `${11.5 + highlightedIndex * 11}%`,
              width: '24px',
              height: 'auto', 
            }}
          />

          {/* Menu options */}
          {menuOptions.map((option, index) => (
            <div
              key={index}
              className="pokemon-gameboy-font"
              style={{
                position: 'absolute',
                top: `${10 + index * 11}%`, 
                left: '35%', 
                color: '#000', 
                cursor: 'pointer',
              }}
              onClick={() => {
                // TO ADD PAGE ROUTES !!!!
                console.log('Navigate to', option);
                setMenuVisible(false); // Close the menu after selecting a menu item
              }}
              ref={(el) => (menuOptionsRef.current[index] = el)}
              tabIndex={index}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSelectionScreen;
