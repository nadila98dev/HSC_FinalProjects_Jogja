
import React from 'react';
import logoWhite from '/src/assets/wonderful-jogja-logo-white-2.svg';
import logoBlack from '/src/assets/wonderful-jogja-logo-black-2.svg';

import { useNavigate } from 'react-router-dom';

const NavbarLeft = ({ isHeadroomHovered, isScrolledToTop }) => {
  const navigateToMainPage = useNavigate ()

  const shouldShowBlackLogo = isHeadroomHovered || !isScrolledToTop;
  const logoToShow = shouldShowBlackLogo ? logoBlack : logoWhite;

  return (
    <div className='cursor-pointer' onClick={() => navigateToMainPage('/')}>
        <img
          className='w-[180px] h-[78.75px] sm:w-[200px] sm:h-[87.5px] lg:w-[220px] lg:h-[96.25px] lg:overflow-hidden'
          src={logoToShow}
          alt="logo"
        />
    </div>
  );
};

export default NavbarLeft;