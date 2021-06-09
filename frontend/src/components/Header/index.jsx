import React from 'react';
import Avatar from '../Avatar';
import Logo from '../Logo';
import ThemeButton from '../ThemeButton/index';

function Header() {
  return (
    <header>
      <Logo />
      <ThemeButton />
      <Avatar />
    </header>
  );
}

export default Header;
