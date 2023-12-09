// itemsSelectors.js

import { createSelector } from 'reselect';
import { getItemsByCategory } from './itemsSlices';  // Import the async thunk

// Assuming itemsEntity is the name of your entity adapter
import { itemSelector } from './itemsSlices';  // Import the selectors from itemsSlices

const selectItemsState = (state) => state.items; // Assuming 'items' is the key used in combineReducers

// Basic selectors provided by the entity adapter
const { selectAll, selectById } = itemSelector;

// Custom selectors
const selectAllItems = createSelector(
  selectItemsState,
  selectAll
);

const selectItemById = (itemId) =>
  createSelector(
    selectItemsState,
    (state) => selectById(state, itemId)
);

export { selectAllItems, selectItemById };
