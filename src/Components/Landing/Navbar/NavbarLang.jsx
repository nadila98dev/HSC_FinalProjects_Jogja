import React , { useState } from 'react'
import './navbarlang.css'


const NavbarLang = () => {

  const [isHeadroomHovered, setIsHeadroomHovered] = useState(false);
  const [isHeadroomPinned, setIsHeadroomPinned] = useState(false);


  return (
    <div className='lg:hidden'>
        {/* <a href="#"> */}
            <div className='flex gap-2 justify-center items-center'>
                <p className='text-button
                  sm:text-xl font-semibold
                '>EN</p>
                <div className={`text-2xl icon1 text-white
                  ${isHeadroomHovered ? 'headroom-hovered' : ''
                  } ${isHeadroomPinned ? 'headroom--pinned' : ''}`}
                >
                  <i className='bx bx-globe'></i>
                </div>
            </div>
        {/* </a> */}
    </div>
  )
}

export default NavbarLang
