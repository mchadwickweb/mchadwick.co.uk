import React from 'react';
import { Link } from 'gatsby';

const Aside = () => (
  <aside className="site__branding">
    <Link to="/">
      <svg className="logo" viewBox="0 0 75 70"><title>Michael Chadwick Logo</title><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Logo---White"><g id="Logo"><path d="M18.916,48.312 L12,48.312 L12,22.728 L18.604,22.728 L18.604,25.848 C20.008,23.352 23.284,22 26.092,22 C29.576,22 32.384,23.508 33.684,26.264 C35.712,23.144 38.416,22 41.796,22 C46.528,22 51.052,24.86 51.052,31.724 L51.052,48.312 L44.344,48.312 L44.344,33.128 C44.344,30.372 42.992,28.292 39.82,28.292 C36.856,28.292 35.088,30.58 35.088,33.336 L35.088,48.312 L28.224,48.312 L28.224,33.128 C28.224,30.372 26.82,28.292 23.7,28.292 C20.684,28.292 18.916,30.528 18.916,33.336 L18.916,48.312 Z" id="m" fill="#FFFFFF"></path><rect id="Rectangle-2" stroke="#FFFFFF" strokeWidth="7" x="3.5" y="3.5" width="68" height="63"></rect><circle id="Oval" stroke="#FFFFFF" fill="#FFFFFF" cx="59.1" cy="44.1" r="4.1"></circle></g></g></g></svg>
    </Link>
  </aside>
);

export default Aside;