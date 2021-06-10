import React from 'react';
import Avatar from './Avatar';
import Logo from './Logo';
import ThemeButton from './ThemeButton/index';
import './header.scss';

function Header() {
  return (
    <header className="header-container">
      <Logo />
      <ThemeButton />
      <Avatar />
    </header>
  );
}

export default Header;
