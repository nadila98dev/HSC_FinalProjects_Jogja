import React, { useEffect, useState } from 'react';
import './menusmall.css'
import { useNavigate } from 'react-router-dom'
import FooterSocials from '../Footer/Socials/FooterSocials';

const MenuSmall = () => {
    const navigateToMainPage = useNavigate ()
    const navigateToSavedPage = useNavigate ()
    const navigateToSearchPage = useNavigate ()

    // practical tips
    const navigateToPracticalTipsPage = useNavigate ()
    const navigateToAirplaneTipsPage = useNavigate()
    const navigateToMotorTipsPage = useNavigate()
    const navigateToCarTipsPage = useNavigate()

    // ============= Things-to-do
    // museum
    const navigateToMuseumPageJogja = useNavigate ()
    // hotel
    const navigateToHotelPageJogja = useNavigate ()
    // Art Activities
    const navigateToArtActivitiesPageJogja = useNavigate ()
    // Souvenir
    const navigateToSouvenirPageJogja = useNavigate()
    // Food
    const navigateToFoodPageJogja = useNavigate()
    //Drinks
    const navigateToDrinksPageJogja = useNavigate()
    //attraction
    const navigateToAttractionPageJogja = useNavigate()

    const [showSpan, setShowSpan] = useState(false);
    useEffect(() => {
      const favoriteItems = JSON.parse(localStorage.getItem('products')) || [];
      setShowSpan(favoriteItems.length > 0);
    }, []);

  return (
    <div className='flex flex-col max-w-screen h-fit items-center
        lg:hidden
    '>

        <div className='my-5 w-[100%]'>
            <div className='px-5 menu__title pb-2 '>
                <h1 className='text-2xl'>Things to do</h1>
            </div>
            <div className='bg-button2 flex flex-col gap-3 px-5 py-3 font-Poppins'>
                <div onClick={() => navigateToAttractionPageJogja('/things-to-do/attraction-jogja')}
                className='flex justify-between items-center menu__text cursor-pointer'>
                    <p>Attraction</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <div onClick={() => navigateToArtActivitiesPageJogja('/things-to-do/art-activities-jogja')}
                 className='flex justify-between items-center menu__text cursor-pointer'>
                    <p>Art Activities</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToMuseumPageJogja ('/things-to-do/museum-jogja')}
                >
                    <p>Museum</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <div onClick={() => navigateToFoodPageJogja('/things-to-do/food-jogja')}
                 className='flex justify-between items-center menu__text cursor-pointer'>
                    <p>Foods</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <div onClick={() => navigateToDrinksPageJogja('/things-to-do/drinks-jogja')} className='flex justify-between items-center menu__text cursor-pointer'>
                    <p>Drinks</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToHotelPageJogja ('/things-to-do/hotel-jogja')}
                >
                    <p>Hotels</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <div onClick={() => navigateToSouvenirPageJogja ('/things-to-do/souvenir-jogja')} 
                className='flex justify-between items-center menu__text cursor-pointer'>
                    <p>Souvenir</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>

            </div>
        </div>

        <div className='mb-5 w-[100%]'>
            <div className='px-5 menu__title pb-2  '>
                <h1 className='text-2xl'>Places to go</h1>
            </div>
            <div className=' bg-button2 flex flex-col gap-3 px-5 py-3 font-Poppins'>
                <div onClick={() => navigateToMainPage('/')} 
                className='flex justify-between items-center menu__text'>
                    <p>Jogja</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
            </div>
        </div>

        <div className='mb-5 w-[100%]'>
            <div className='px-5 menu__title pb-2 '> 
                <h1 className='text-2xl'>Practical tips</h1>
            </div>
            <div className='bg-button2 flex flex-col gap-3 px-5 py-3 font-Poppins'>
                    <div className='flex justify-between items-center menu__text'
                        onClick={() => navigateToPracticalTipsPage ('/practical-tips-page')}
                    >
                        <p>FAQ about Central Java</p>
                        <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                    </div>
                    <div className='flex justify-between items-center menu__text'
                        onClick={() => navigateToAirplaneTipsPage ('/practical-tips-page/airplane')}
                    >
                        <p>Arriving with airplane</p>
                        <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                    </div>
                    <div className='flex justify-between items-center menu__text'
                        onClick={() => navigateToMotorTipsPage ('/practical-tips-page/motor')}
                    >
                        <p>Arriving with motorcycle</p>
                        <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                    </div>
                    <div className='flex justify-between items-center menu__text'
                        onClick={() => navigateToCarTipsPage ('/practical-tips-page/car')}
                    >
                        <p>Arriving with car</p>
                        <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                    </div>
                    <div className='flex justify-between items-center menu__text'
                        onClick={() => navigateToPracticalTipsPage ('/practical-tips-page')}
                    >
                        <p>Weather in Central Java</p>
                        <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                    </div>
                    <div className='flex justify-between items-center menu__text'
                        onClick={() => navigateToPracticalTipsPage ('/practical-tips-page')}
                    >
                        <p>What we need?</p>
                        <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                    </div>
            </div>
        </div>

        <div className='mb-5 w-[100%]'>
            <div className='px-5 menu__title pb-2  '>
                <h1 className='text-2xl'>Personal</h1>
            </div>
            <div className=' bg-button2 flex flex-col gap-3 px-5 py-3 font-Poppins'>
                <div onClick={() => navigateToMainPage('/')} 
                className='flex justify-between items-center menu__text'>
                    <p>Login</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <div onClick={() => navigateToMainPage('/')} 
                className='flex justify-between items-center menu__text'>
                    <p>My Account</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
                <div onClick={() => navigateToMainPage('/')} 
                className='flex justify-between items-center menu__text'>
                    <p>My Cart</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                </div>
            </div>
        </div>

        <FooterSocials />

        <div className='fixed z-[1600] bottom-10 flex justify-center items-center
            lg:hidden
            '>
            <button onClick={() => navigateToSearchPage('/search-page')}
             className='bg-white text-button text-[24px] rounded-l-lg  w-[3rem] h-[3rem] text-center relative left-1 drop-shadow-md flex justify-center items-center'>
            <i className='bx bx-search'></i>
            </button>

            <button 
                id='botButton' 
                className='text-button bg-button2 text-[40px] px-[6px] py-[1px] w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-xl z-[1] drop-shadow-md'
                onClick={() => navigateToMainPage('/')}
                >
                <i className='bx bx-x'></i>
            </button>

            <button onClick={() => navigateToSavedPage('/saved-page')}
            className='bg-white text-button text-[24px] rounded-r-lg  w-[3rem] h-[3rem] text-center relative right-1 drop-shadow-md flex justify-center items-center'> 
            <i className='bx bx-heart'></i>
            {showSpan && (
                <span className='absolute text-[80px] bottom-[1px] right-[7px]'>.</span>
            )}
            </button>
        </div>
    </div>

  )
}

export default MenuSmall
