import React from 'react';
import { useNavigate } from 'react-router-dom';

const BotButton = () => {

  const navigateToMenuJogja = useNavigate ()  
  const navigateToSavedPage = useNavigate ()
  return (
    <div className='fixed z-[1500] bottom-10 flex justify-center items-center
      lg:hidden
    '>
      <button className='bg-white text-button text-xl rounded-l-lg px-[6px] py-[1px] w-[2.5rem] h-[2.5rem] text-center relative left-1 drop-shadow-md'>
      <i className='bx bx-search'></i>
      </button>

      <button 
        id='botButton' 
        className='text-button bg-button2 text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center rounded-xl z-[1] drop-shadow-md'
        onClick={() => navigateToMenuJogja('/menu-jogja')}
        >
          <i className='bx bx-menu'></i>
      </button>

      <button onClick={() => navigateToSavedPage('/saved-page')}
       className='bg-white text-button text-xl rounded-r-lg px-[6px] py-[1px] w-[2.5rem] h-[2.5rem] text-center relative right-1 drop-shadow-md'> 
        <i className='bx bx-heart'></i>
      </button>
    </div>
  )
}

export default BotButton
