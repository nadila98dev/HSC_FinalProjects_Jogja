export const saveCredentialsToLocalStorage = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };
  
  export const getEmailFromLocalStorage = () => {
    return localStorage.getItem('email');
  };
  
  export const getPasswordFromLocalStorage = () => {
    return localStorage.getItem('password');
  };