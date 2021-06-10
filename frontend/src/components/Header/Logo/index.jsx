import React from 'react';
import logo from './logo.svg';

function Logo() {
  return (
    <div className="header-container__logo">
      <img className="logo__image" src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
