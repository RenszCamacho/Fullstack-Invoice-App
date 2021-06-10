import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Logo() {
  return (
    <div className="header-container__logo">
      <Link to="/">
        <img className="logo__image" src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
