DISCLAIMER : 
This project is copyrighted. Do not copy, modify, or redistribute.

This is a digital rendition of the Zutomayo Card game. 

Made by a humble Zutomayo fan.

All card designs are taken from the Zutomayo website.

Still a work in progress - feel free to get in contact if you have any questions.

# Zutomayo Card Collection - The Battle Begins

A modern React web application for viewing and exploring a Zutomayo card collection. Built with Vite for fast development and smooth user experience.

## ✨ Features

- **Modern Design**: Clean, responsive interface with smooth animations
- **Card Grid View**: Browse all 312 cards (6 sets × 52 cards) in an organized grid
- **Advanced Search & Filtering**: Filter by set, type, rarity, or search by text
- **Detailed Card Viewer**: View individual cards with full details and navigation
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Error Boundaries**: Graceful error handling and recovery

## 🚀 Tech Stack

- **React 19.1.0** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Framer Motion 12.9.2** - Smooth animations and transitions
- **React Router DOM** - Client-side routing
- **CSS Modules** - Scoped styling
- **GitHub Actions** - Automated deployment

## 🛠️ Getting Started

### Installation

1. **Navigate to the card viewer directory**
   ```bash
   cd card-viewer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000/Zutomayo-Card---The-battle-begins/](http://localhost:3000/Zutomayo-Card---The-battle-begins/)

### Available Scripts

- `npm run dev` - Start development server  
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🃏 Card Data Format

The application expects card images in the following format:
```
{number}_{set}_{type}_{rarity}
```

**Example**: `001_Set1_C_UR.jpg`
- `001` - Card number (3 digits)
- `Set1` - Set identifier  
- `C` - Card type (C, UC, R, SR)
- `UR` - Rarity (N, R, SR, UR)

## 📁 Project Structure

```
card-viewer/
├── src/
│   ├── components/          # React components
│   ├── assets/images/       # Card images and backgrounds  
│   ├── utils/cardData.js    # Card data parsing utilities
│   ├── styles/              # CSS files
│   └── App.jsx              # Main application
├── public/                  # Static assets
├── vite.config.js          # Vite configuration  
└── package.json            # Dependencies and scripts
```

## 🚀 Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions.

---

help me
