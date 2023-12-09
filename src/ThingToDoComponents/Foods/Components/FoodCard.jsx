import React  from 'react'
import { Link } from 'react-router-dom'
import ButtonLove from '../../../Components/Atoms/ButtonLove'

import FoodButton from './FoodButton'


const FoodCard = ({item , src , title , description , id}) => {

  return (
    <div className='w-full mb-5  lg:w-[25%] md:w-[30%] md:p-2'>
            <div className="relative mb-2 overflow-hidden rounded-lg">
                <img src={src} alt="" className='w-full h-60 hover:scale-105 duration-300 object-cover' />
                <div className='flex justify-end h-0 relative bottom-12 xl:bottom-[52px]'>
                    <ButtonLove 
                    id={id} />
                </div>
            </div>
            <div className='h-[90px]'>
                <h3>{title}</h3>
                <p className='text-[14px] line-clamp-3'>{description}</p>
            </div>
            <Link to={`/things-to-do/food-jogja/${id}`}> 
                <FoodButton />
            </Link>
    </div>
  )
}

export default FoodCard
