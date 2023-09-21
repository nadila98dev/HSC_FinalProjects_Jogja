import React from 'react'
import logoBlack from '/src/assets/wonderful-jogja-logo-black-2.svg'
import MemberTeam from './MemberTeam'

function FooterSocials() {
  return (
    <div className='w-screen gap-4 h-[15rem] p-5 flex justify-center items-center flex-col
    '>
      <img className='w-[180px] relative left-[26px]' src={logoBlack} alt="logo" />
      <p className='text-center font-Poppins'>Thank You!! for visiting our Website, hope you guys enjoy it!</p>
      <p className='font-Lora font-semibold'>&copy; Wonderful Central Java</p>
      <MemberTeam />
    </div>
  )
}

export default FooterSocials
