import React from 'react';
import { Link } from 'gatsby';
import './header.scss';

const Header = () => (
  <header class="header">
    <nav>
      <Link to="/about/">About</Link>
    </nav>
  </header>
);

export default Header;
