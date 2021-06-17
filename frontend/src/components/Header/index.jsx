import React from 'react';
import Avatar from './Avatar';
import Logo from './Logo';
import './header.scss';

function Header() {
  return (
    <header className="header-container">
      <Logo />
      <Avatar />
    </header>
  );
}

export default Header;
