import React from 'react'

import ButtonLove from '../../../../Components/Atoms/ButtonLove';

const ArtCarouselCard = ({ imageSrc, title}) => {
    return (
        <div className="w-[280px] h-[380px] bg-white pt-5  flex flex-col items-center rounded-xl  shadow-lg font-poppins cursor-grab">
          <div className='w-[200px] rounded-lg '>
            <img src={imageSrc} className="h-[280px] object-cover w-full rounded-lg" alt="imagecard" />
          </div>
          <div className="py-4 w-[200px]">
            <p className="mb-3 font-semibold lg:text-[18px] sm:text-sm">{title}</p>
          </div>
        </div>
      );
    }

export default ArtCarouselCard
