import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getEmailFromLocalStorage,
  getPasswordFromLocalStorage,
} from '../../../Utils/userDatas';

const BotButton = () => {

  const navigateToMenuJogja = useNavigate ()  
  const navigateToSavedPage = useNavigate ()
  const navigateToLoginPage = useNavigate ()
  const navigateToAccountPage = useNavigate()

  const [showSpan, setShowSpan] = useState(false);
  const storedEmail = getEmailFromLocalStorage();
  const storedPassword = getPasswordFromLocalStorage();

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem('products')) || [];
    setShowSpan(favoriteItems.length > 0);
  }, []);

  const handleLoginClick = () => {
    if (storedEmail && storedPassword) {
      navigateToAccountPage('/account'); 
    } else {
      navigateToLoginPage('/login'); 
    }
  };

  return (
    <div className='fixed z-[1500] bottom-10 flex justify-center items-center
      lg:hidden
    '>
      <button onClick={handleLoginClick} className='bg-white text-button text-[24px] rounded-l-lg  w-[3rem] h-[3rem] text-center relative left-1 drop-shadow-md flex items-center justify-center'>
      <i className='bx bx-user'></i>
      </button>

      <button 
        id='botButton' 
        className='text-button bg-button2 text-3xl px-[6px] py-[1px] w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-xl z-[1] drop-shadow-md'
        onClick={() => navigateToMenuJogja('/menu-jogja')}
        >
          <i className='bx bx-menu'></i>
      </button>

      <div>
        <button onClick={() => navigateToSavedPage('/saved-page')}
        className='bg-white text-button text-[24px] rounded-r-lg  w-[3rem] h-[3rem] text-center relative right-1 drop-shadow-md flex items-center justify-center'> 
          <i className='bx bx-heart'></i>
          {showSpan && (
            <div className='absolute top-[12px] right-[12px] w-[8px] h-[8px] bg-button rounded-[50%]'></div>
          )}
        </button>
      </div>
    </div>
  )
}

export default BotButton
