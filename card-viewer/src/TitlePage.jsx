import React from 'react';
import './TitlePage.css';

// Import your assets with the correct paths
import logoImage from './Assets/The_battle_beings_title_screen_image.png';
import smallLogo from './Assets/Zutomayo_logo_in_font.svg';

const TitlePage = () => {
  // Remove the useState declaration if you're not using it
  
  const handleEnter = () => {
    console.log("Enter button clicked");
    // Add your game start logic here
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