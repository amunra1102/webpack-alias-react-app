import React from 'react';

import './styles.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <a href className="brand">Brand</a>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
