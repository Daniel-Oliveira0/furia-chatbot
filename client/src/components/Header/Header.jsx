import React from 'react';
import logoFuria from '../../assets/logo-furia.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logoFuria} alt="FURIA Logo" className="logo" />
    </header>
  );
};

export default Header;
