import React from 'react';
import './GameMenu.css';

const GameMenu = () => {
  return (
    <div className="game-menu">
      <h1>Zutomayo Card - Game Menu</h1>
      <div className="menu-options">
        <button className="menu-button">Play Game</button>
        <button className="menu-button">Card Collection</button>
        <button className="menu-button">Settings</button>
        <button className="menu-button">Credits</button>
      </div>
    </div>
  );
};

export default GameMenu;