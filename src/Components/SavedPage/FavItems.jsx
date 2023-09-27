
import React, { useState, useEffect } from 'react';
import ActivatedButtonLove from '../Atoms/ActivatedButtonLove';
import { fetchItemById } from '../../Utils/getProducts';
import { getProductsFromLocalStorage } from '../../Utils/Products';

const FavItems = () => {
  const [favoriteItems, setFavoriteItems] = useState(getProductsFromLocalStorage() || []);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const products = await Promise.all(
          favoriteItems.map(async (item) => {
            const product = await fetchItemById(item.id);
            return {
              ...item[0],
              ...product,
            };
          })
        );
        setFavoriteProducts(products);
      } catch (error) {
        console.error('Error fetching favorite products:', error);
      }
    };

    fetchFavoriteProducts();
  }, [favoriteItems]);


  return (
    <div id='added-list' className='w-screen h-fit flex flex-col justify-center items-center p-5 gap-5 lg:py-10 lg:px-20'>
      {favoriteProducts.map((favoriteItem, index) => (
        <div key={index} className='w-full h-fit cursor-pointer justify-center flex flex-col lg:flex-row'>
          <div className='overflow-hidden rounded-lg lg:h-[200px] lg:w-[300px]'>
            <img
              className='rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[200px] lg:w-[300px] xl:object-center'
              src={favoriteItem.src}
              alt={favoriteItem.imageAlt}
            />
            <div className='relative flex justify-end bottom-12 xl:bottom-16 h-0'>
              <ActivatedButtonLove id={favoriteItem.id} setFavoriteItems={setFavoriteItems} />
            </div>
          </div>
          <div className='p-3 lg:w-2/3 lg:ml-5'>
            <h3 className='text-[22px]'>{favoriteItem.name}</h3>
            <p className='line-clamp-2'>{favoriteItem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavItems;

