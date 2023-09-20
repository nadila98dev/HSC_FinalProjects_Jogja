
import axiosInstance from '../API/apiCall';

export const fetchItemById = async (id) => {
  try {
    const item = await axiosInstance.itemById(id);
    return item;
  } catch (error) {
    console.error('Error fetching item by ID:', error);
    throw error;
  }
};

