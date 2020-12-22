import React from 'react';

import { currenciesData } from '../../data.js';
import { setCurrency } from './currencyFilterSlice.js';

export const CurrencyFilter = ({currencyFilter, dispatch}) => {
  
  const onClickHandler = (currency) => {
    dispatch(setCurrency(currency));
  }
  
  return (
    <div id='currency-filters-container'>
      <span>Choose a currency:</span> 
      {currenciesData.map(createCurrencyButton)}
    </div>
  )

  function createCurrencyButton(currency) {
    return (
      <button 
        key={currency}
        onClick={() => onClickHandler(currency)}>
        {currency}
      </button>
    )
  }
}