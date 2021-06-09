import React from 'react';
import moonicon from './moon-icon.svg';

function ThemeButton() {
  return (
    <button type="button" aria-label="toggle button">
      <img src={moonicon} alt="moon" />
    </button>
  );
}

export default ThemeButton;
