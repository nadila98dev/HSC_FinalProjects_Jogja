import React from 'react'

const BgVideo = () => {
  return (
    <div className='absolute left-0 z-[-10] w-full h-[1080px] brightness-50'>
      <video className='w-full h-full object-cover' autoPlay muted loop playsInline> 
        <source src='/Assets/videos/landing-vid-jogja.mp4' type='video/mp4'/>
      </video>
    </div>
  )
}

export default BgVideo
