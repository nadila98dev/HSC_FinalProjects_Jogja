import { createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config';


const apiUrl = config.api_url;

export const getItems = createAsyncThunk('/items', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

const itemsEntity = createEntityAdapter({
  selectId: (item) => item.id,
});

export const itemSelector = itemsEntity.getSelectors((state) => state.item);
export default itemsEntity.reducer;
