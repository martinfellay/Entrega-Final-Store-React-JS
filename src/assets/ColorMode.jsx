import React, { useState, useEffect } from 'react';
import DarkIcon from './DarkIcon';

const ColorMode = () => {

  const [theme, setTheme] = useState('light'); // Initial theme

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

      return(
        <div  onClick={toggleTheme} variant="secondary">
          <DarkIcon/>
        </div>
      )
};

export default ColorMode;