import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TitlePage.css';

// Assuming you have these image files in your assets folder
import logoImage from './Assets/The_battle_beings_title_screen_image.png';
import smallLogo from './Assets/Zutomayo_logo_in_font.svg';

const TitlePage = () => {
  const navigate = useNavigate();
  const [buttonHover, setButtonHover] = useState(false);
  
  const handleEnter = () => {
    // Navigate to your main game page or menu
    navigate('/menu');
  };

  return (
    <div className="title-page">
      <div className="title-container">
        <div className="logo-container">
          <img src={logoImage} alt="Zutomayo Card" className="main-logo" />
          <div className="title-text">THE BATTLE BEGINS</div>
        </div>
      </div>
      
      <div className="enter-button-container">
        <button 
          className={`enter-button ${buttonHover ? 'hover' : ''}`}
          onClick={handleEnter}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          ENTER
        </button>
      </div>
      
      <div className="bottom-logo-container">
        <img src={smallLogo} alt="Zutomayo" className="bottom-logo" />
      </div>
    </div>
  );
};

export default TitlePage;