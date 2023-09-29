import React , { useState } from 'react'
import './navbarlang.css'
import { Link } from 'react-router-dom';


const NavbarLang = () => {

  const [isHeadroomHovered, setIsHeadroomHovered] = useState(false);
  const [isHeadroomPinned, setIsHeadroomPinned] = useState(false);


  return (
    <div className='lg:hidden'>
        <Link to={'/search-page'}>
            <div className='flex gap-2 justify-center items-center px-2 py-1 hover:bg-button2 rounded-lg cursor-pointer'>
                <div className={`text-2xl icon1 text-white
                  ${isHeadroomHovered ? 'headroom-hovered' : ''
                  } ${isHeadroomPinned ? 'headroom--pinned' : ''}`}
                >
                  <i className='bx bx-search-alt'></i>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default NavbarLang
