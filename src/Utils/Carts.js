export const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const removeFromCart = (itemId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  export const clearCart = () => {
    localStorage.removeItem('cart');
  };
  
  export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  };