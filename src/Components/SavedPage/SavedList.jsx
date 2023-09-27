import React, { useState , useEffect} from 'react'
import FavItems from './FavItems'
import NothingItem from './NothingItem'

import { getProductsFromLocalStorage } from '../../Utils/Products'


const SavedList = () => {
  const [favoriteItemsExist, setFavoriteItemsExist] = useState(false);

  useEffect(() => {
    const favoriteItems = getProductsFromLocalStorage();
    if (favoriteItems.length > 0) {
      setFavoriteItemsExist(true);
    }
  }, []);
  
  return (
    <div>
      {favoriteItemsExist ? (
        <FavItems />
      ) : (
        <NothingItem />
      )}
    </div>

  )
}

export default SavedList
