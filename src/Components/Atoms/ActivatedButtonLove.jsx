import React from 'react'
import { removeProductFromLocalStorage } from '../../Utils/Products';

const ActivatedButtonLove = ({id , setFavoriteItems}) => {
  const handleRemoveClick = () => {
    localStorage.removeItem(`isSolid_${id}`);
    removeProductFromLocalStorage(id);
    setFavoriteItems((prevFavoriteItems) =>
      prevFavoriteItems.filter((item) => item.id !== id)
    );
  }

  return (
    <div>
        <button onClick={handleRemoveClick}
        className='px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[32px]'>
            <i className='bx bxs-heart text-button  font-semibold'></i>
        </button>
    </div>
  )
}

export default ActivatedButtonLove
