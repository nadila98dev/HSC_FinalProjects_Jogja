import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getEmailFromLocalStorage,
  getPasswordFromLocalStorage,
} from '../../Utils/userDatas';
import axios from "axios";

import './menularge.css'
import blackLogo from '/src/assets/wonderful-jogja-logo-black-2.svg'

import photo1 from '/Assets/menu/menu-jogja-photo1.png'
import photo2 from '/Assets/menu/menu-jogja-photo2.png'
import photo3 from '/Assets/menu/menu-jogja-photo3.png'
import photo4 from '/Assets/menu/menu-jogja-photo4.png'

function MenuLarge() {

  const fetchCategory = async () => {
    try{
      const data = await axios.get("http://localhost:5000/api/v1/categories")

      setCategory(data.data.data)
    }
    catch(error) {
      console.error(error)
    }
  }
  useEffect(() => {
    
    fetchCategory()
  }, [])
  
  const [category, setCategory] = useState([]);
  console.log(JSON.stringify(category,null,2));

  const navigateToMainPage = useNavigate ()
  const navigateToJogjaPage = useNavigate ()
  
  // practical-page
  const navigateToPracticalTipsPage = useNavigate()
  const navigateToAirplaneTipsPage = useNavigate()
  const navigateToMotorTipsPage = useNavigate()
  const navigateToCarTipsPage = useNavigate()
  

  // =========== things-to-do
  const navigateToPageJogja = useNavigate()

  // ============= Personal
  const navigateToCartPageJogja = useNavigate()
  const navigateToLoginPageJogja = useNavigate()
  const navigateToAccountPage = useNavigate()



  const [activeSubMenu, setActiveSubMenu] = useState('thingsToDo');
  const storedEmail = getEmailFromLocalStorage();
  const storedPassword = getPasswordFromLocalStorage();

  const handleMenuHover = (submenu) => {
    setActiveSubMenu(submenu);
  };

  const handleMenuLeave = (submenu) => {
    if (activeSubMenu === submenu) {
      setActiveSubMenu(null);
    }
  };

  const handleLoginClick = () => {
    if (storedEmail && storedPassword) {
      navigateToAccountPage('/account'); 
    } else {
      navigateToLoginPageJogja('/login'); 
    }
  };

  
const handleCartClick = () => {
    if (storedEmail && storedPassword) {
      navigateToCartPageJogja('/cart-page'); 
    } else {
      navigateToLoginPageJogja('/login'); 
    }
  };

  return (
    <div className='hidden lg:block pl-[3rem]  h-[100vh]'>
      <div className='w-screen h-[100vh] flex'>
        <div className='w-[33.34%] gap-10 flex flex-col'>
            <img className='w-[220px] h-[96.25px] overflow-hidden pt-5' src={blackLogo} alt="" />
            <h1
            className='menu__Large'
            onMouseEnter={() => handleMenuHover('thingsToDo')}
            onMouseLeave={handleMenuLeave}
            >
              Things to do</h1>
            <h1
            className='menu__Large'
            onMouseEnter={() => handleMenuHover('placesToGo')}
            onMouseLeave={handleMenuLeave}
              >
              Places to go</h1>
            <h1
            className='menu__Large'
            onMouseEnter={() => handleMenuHover('practicalTips')}
            onMouseLeave={handleMenuLeave}
            >
              Practical tips</h1>
            <h1
            className='menu__Large'
            onMouseEnter={() => handleMenuHover('personal')}
            onMouseLeave={handleMenuLeave}
            >
              Personal</h1>

            <div className='flex absolute gap-3 items-center bg-button2 rounded-xl w-[230px] cursor-pointer drop-shadow-md bottom-14'
            onClick={() => navigateToMainPage('/')}>
              <button 
                  id='botButton' 
                  className='text-button  text-[40px] px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] '
                  >
                  <i className='bx bx-x'></i>
              </button>
              <p className='font-Poppins'>Back to Main Page</p>
            </div>
        </div>

        <div className='w-[33.34%] px-10 pt-[133px] flex flex-col  bg-button2'>
          {activeSubMenu === 'thingsToDo' && (
            <>
              {
                <div className='font-Poppins gap-8 flex flex-col text-xl' >
                  {category.map((item) => (
                  <div key={item.id} onClick={() => navigateToPageJogja(`/things-to-do/${item.slug}`)} 
                  className='flex justify-between items-center menu__text cursor-pointer'>
                    <p>{item.name}</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>
                  ))}
                </div>
              }
            </>
          )}
          {activeSubMenu === 'placesToGo' && (
            <>
              {
                <div className='font-Poppins gap-8 flex flex-col text-xl'>
                  {/* ============== SEMENTARA KE MAIN PAGE DULU ======================= */}
                  <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToJogjaPage('/')} 
                  >
                    <p>Jogja</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>
                </div>
              }
            </>
          )}
          {activeSubMenu === 'practicalTips' && (
            <>
              {
                <div className='font-Poppins gap-8 flex flex-col text-xl'>
                  <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToPracticalTipsPage ('/practical-tips-page')}
                  >
                    <p>Peoples and Cultures</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>

                  <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToAirplaneTipsPage ('/practical-tips-page/airplane')}
                  >
                    <p>Arriving with airplane</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>
                  <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToMotorTipsPage ('/practical-tips-page/motor')}
                  >
                    <p>Arriving with motorcycle</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>
                  <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToCarTipsPage ('/practical-tips-page/car')}
                  >
                    <p>Arriving with car</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>

                  <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToPracticalTipsPage ('/practical-tips-page')}
                  >
                    <p>Weather in Central Java</p>
                  <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>
                  <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToPracticalTipsPage ('/practical-tips-page')}
                  >
                    <p>What we need?</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>
              </div>
              }
            </>
          )}
          {activeSubMenu === 'personal' && (
            <>
              {
                <div className='font-Poppins gap-8 flex flex-col text-xl'>
                  {/* ============== SEMENTARA KE MAIN PAGE DULU ======================= */}
                  <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={() => navigateToLoginPageJogja('/login')} 
                  >
                    <p>Login</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>
                  <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={handleLoginClick} 
                  >
                    <p>My Account</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>
                  <div className='flex justify-between items-center menu__text cursor-pointer'
                    onClick={handleCartClick} 
                  >
                    <p>My Cart</p>
                    <i className='bx bx-right-arrow-alt text-button text-2xl font-bold'></i>
                  </div>
                </div>
              }
            </>
          )}
        </div>

        <div className='w-[33.34%] overflow-hidden flex justify-center items-center'>
          {activeSubMenu === 'thingsToDo' && (
            <>
              {
                <img className='w-[100%] h-[100%]' src={photo2} alt="" />
              }
            </>
          )}
          {activeSubMenu === 'placesToGo' && (
            <>
              {
                <img className='w-[100%] h-[100%]' src={photo1} alt="" />
              }
            </>
          )}
          {activeSubMenu === 'practicalTips' && (
            <>
              {
                <img className='w-[100%] h-[100%]' src={photo3} alt="" />
              }
            </>
          )}
          {activeSubMenu === 'personal' && (
            <>
              {
                <img className='w-[100%] h-[100%]' src={photo4} alt="" />
              }
            </>
          )}
        </div>

      </div>
    </div>
  )
}

export default MenuLarge

