import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/products">Products</Link></li>
    </ul>
  </nav>
);

export default Header;
