import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BotButton = () => {

  const navigateToMenuJogja = useNavigate ()  
  const navigateToSavedPage = useNavigate ()
  const navigateToSearchPage = useNavigate ()

  const [showSpan, setShowSpan] = useState(false);
  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem('products')) || [];
    setShowSpan(favoriteItems.length > 0);
  }, []);

  return (
    <div className='fixed z-[1500] bottom-10 flex justify-center items-center
      lg:hidden
    '>
      <button onClick={() => navigateToSearchPage('/search-page')} className='bg-white text-button text-[24px] rounded-l-lg  w-[3rem] h-[3rem] text-center relative left-1 drop-shadow-md flex items-center justify-center'>
      <i className='bx bx-search'></i>
      </button>

      <button 
        id='botButton' 
        className='text-button bg-button2 text-3xl px-[6px] py-[1px] w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-xl z-[1] drop-shadow-md'
        onClick={() => navigateToMenuJogja('/menu-jogja')}
        >
          <i className='bx bx-menu'></i>
      </button>

      <button onClick={() => navigateToSavedPage('/saved-page')}
       className='bg-white text-button text-[24px] rounded-r-lg  w-[3rem] h-[3rem] text-center relative right-1 drop-shadow-md flex items-center justify-center'> 
        <i className='bx bx-heart'></i>
        {showSpan && (
          <span className='absolute text-[80px] bottom-[1px] right-[7px]'>.</span>
        )}
      </button>
    </div>
  )
}

export default BotButton
