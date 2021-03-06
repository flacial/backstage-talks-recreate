/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import imgUrl from '../../assets/logo.webp';
import './header.style.sass';

const Header = () => (
  <header>
    <img width="260" height="30" src={imgUrl} alt="Logo" />
    <a className="contact-link" href="#">
      Contact
    </a>
  </header>
);

export default Header;
