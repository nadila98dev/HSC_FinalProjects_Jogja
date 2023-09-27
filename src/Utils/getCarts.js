import axiosInstance from '../API/apiCall';

export const fetchCartsById = async (id) => {
    try{
        const item = await axiosInstance.itemById(id);
        return item;
    } catch(error) { 
        console.error(error);
        throw error;
    }
}
