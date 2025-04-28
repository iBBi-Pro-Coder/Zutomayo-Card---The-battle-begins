import React, { useState } from 'react';
import './TitlePage.css';

// Update these imports to match your file paths - use relative paths with the correct case
import logoImage from './Assets/The_battle_beings_title_screen_image.png';
import smallLogo from './Assets/Zutomayo_logo_in_font.svg';

const TitlePage = () => {
  const [buttonHover, setButtonHover] = useState(false);
  
  const handleEnter = () => {
    // Use window.location instead of React Router for now
    console.log("Enter button clicked");
    // You can uncomment this when you're ready to navigate
    // window.location.href = './menu.html';
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
          className="enter-button"
          onClick={handleEnter}
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