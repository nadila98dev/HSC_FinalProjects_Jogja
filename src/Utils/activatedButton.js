export const getIsSolidFromLocalStorage = (id) => {
    const key = `isSolid_${id}`;
    const value = localStorage.getItem(key);
    return value === "true";
  };
  
  export const setIsSolidToLocalStorage = (id, isSolid) => {
    const key = `isSolid_${id}`;
    localStorage.setItem(key, isSolid.toString());
  };