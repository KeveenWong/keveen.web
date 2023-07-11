import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import mail from '../assets/mail.png'
import resume from '../assets/resume.png'
import kevinResume from '../assets/kevinresume.pdf'

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Set the height of the container to full viewport height */
`;

const Icon = styled.div`
    margin: 0 100px;
    cursor: ${props => (props.selected ? 'pointer' : 'default')};
    color: ${props => (props.selected ? 'red' : 'black')};
    animation: ${props =>
        props.selected ? 'highlight 1s infinite' : props.unselected ? 'fade 0.5s' : 'none'};
    transform: ${props => (props.unselected ? 'scale(0.8)' : 'none')};
    opacity: ${props => (props.unselected ? '0.6' : '1')};

    @keyframes highlight {
        0% {
        transform: scale(1);
        }
        50% {
        transform: scale(1.1);
        }
        100% {
        transform: scale(1);
        }
    }

    @keyframes fade {
        from {
        transform: scale(1);
        opacity: 1;
        }
        to {
        transform: scale(0.8);
        opacity: 0.6;
        }
    }
`;

const GameSelectionScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const iconRefs = useRef([]);

    useEffect(() => {
        iconRefs.current = iconRefs.current.slice(0, 4);
    }, []);

    const handleKeyDown = event => {
        if (event.key === 'ArrowLeft') {
        setSelectedIndex(prevIndex => (prevIndex === 0 ? 3 : prevIndex - 1));
        } else if (event.key === 'ArrowRight') {
        setSelectedIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
        } else if (event.key === 'z') {
        const selectedIcon = iconRefs.current[selectedIndex];
        if (selectedIcon) {
            selectedIcon.click();
        }
        }
    };
      
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedIndex]);
  
    const handleIconClick = index => {
      setSelectedIndex(index);
      // Perform additional actions or navigate to the desired URL for the clicked icon
      switch (index) {
        case 0:
          window.location.href = 'https://www.linkedin.com/in/kevinwong711/';
          break;
        case 1:
          window.location.href = 'https://github.com/KeveenWong';
          break;
        case 2:
          window.location.href = 'mailto:kevwong711@gmail.com';
          break;
        case 3:
          window.location.href = kevinResume;
          break;
        default:
          break;
      }
    };

    return (
        <IconContainer>
            <Icon selected={selectedIndex === 0} unselected={selectedIndex !== 0} ref={el => (iconRefs.current[0] = el)} onClick={() => handleIconClick(0)}>
                <img src={linkedin} alt="Custom Icon" width={200} height={200}/>
            </Icon>
            <Icon selected={selectedIndex === 1} unselected={selectedIndex !== 1} ref={el => (iconRefs.current[1] = el)} onClick={() => handleIconClick(1)}>
                <img src={github} alt="Custom Icon" width={200} height={200}/>
            </Icon>
            <Icon selected={selectedIndex === 2} unselected={selectedIndex !== 2} ref={el => (iconRefs.current[2] = el)} onClick={() => handleIconClick(2)}>
                <img src={mail} alt="Custom Icon" width={200} height={200}/>
            </Icon>
            <Icon selected={selectedIndex === 3} unselected={selectedIndex !== 3} ref={el => (iconRefs.current[3] = el)} onClick={() => handleIconClick(3)}>
                <img src={resume} alt="Custom Icon" width={200} height={200}/>
            </Icon>
        </IconContainer>
    );
};

export default GameSelectionScreen;