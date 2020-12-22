import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { Cart } from '../features/cart/Cart.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

export const App = ({ state, dispatch }) => {
  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />

      <Inventory
        inventory={getFilteredValues(state.inventory, state.searchTerm)}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};

function getFilteredValues(recipes, searchTerm) {
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
