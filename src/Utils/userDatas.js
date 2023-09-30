export const saveCredentialsToLocalStorage = (email, password, username) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('username', username);
  };

  export const getUsernameFromLocalStorage = () => {
    return localStorage.getItem('username');
  };
  
  export const getEmailFromLocalStorage = () => {
    return localStorage.getItem('email');
  };
  
  export const getPasswordFromLocalStorage = () => {
    return localStorage.getItem('password');
  };

  export const removeUsernameFromLocalStorage = () => {
    localStorage.removeItem('username');
  };

  export const removeEmailFromLocalStorage = () => {
    localStorage.removeItem('email');
  };
  
  export const removePasswordFromLocalStorage = () => {
    localStorage.removeItem('password');
  };

