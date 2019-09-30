import React from 'react';
import { Image } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Image src="logo.svg" />
    </header>
  );
};

export default Header;
