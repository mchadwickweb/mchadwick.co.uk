import React from 'react';
import { Link } from 'gatsby';

import './navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <Link className="navigation__item" activeClassName="navigation__item--active" to="/contact">Contact</Link>
  </nav>
);

export default Navigation;
