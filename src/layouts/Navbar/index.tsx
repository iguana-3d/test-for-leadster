import React from 'react';
import { NavBarContainer } from './styles';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <picture>
        <source srcSet="/static/images/logo.png" type="image/png" />
        <img
          className="nav-bar-image"
          src="/static/images/logo.png"
          alt="logo"
        />
      </picture>
    </NavBarContainer>
  );
};

export default NavBar;
