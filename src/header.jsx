import React from 'react';
import './App.css';

const Header = ({ title }) => {
  return (
    <div className="header">
      <img src="/images/logo.png" alt="Logo" className="header-logo" />
      <h1>{title}</h1>
    </div>
  );
};

export default Header;