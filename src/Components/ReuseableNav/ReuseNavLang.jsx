import React from 'react'
import { Link } from 'react-router-dom'

const ReuseNavLang = () => {
    return (
        <div className='lg:hidden'>
            <Link to={'/search-page'}>
                <div className='flex gap-2 justify-center items-center px-2 py-1 hover:bg-button2 rounded-lg cursor-pointer'>
                    <div className='text-2xl icon1 text-[#000]'>
                    <i className='bx bx-search-alt'></i>
                    </div>
                </div>
            </Link>
        </div>
      )
    }

export default ReuseNavLang
