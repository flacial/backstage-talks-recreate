import React from 'react';
import imgUrl from '../../assets/logo.png';
import './header.style.sass';

const Header = () => (
  <header>
    <img src={imgUrl} alt="Logo" />
    <a className="contact-link" href="info@backstagetalks.com">
      Contact
    </a>
  </header>
);

export default Header;
