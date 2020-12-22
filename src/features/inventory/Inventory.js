import React, { useEffect } from 'react';

import { calculatePrice } from '../../utilities/utilities.js'
import { addItem } from '../cart/cartSlice.js';
import { loadData } from './inventorySlice';

export const Inventory = ({inventory, currencyFilter, dispatch}) => {
  const onMount = () => {
    dispatch(loadData());
  }
  useEffect(onMount, []);
  
  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  }

  if (inventory.length === 0) {
    return (
      <p> Sorry, no products are currently available... </p>
    )
  }
  
  return (
    <ul id='inventory-container'>
      {inventory.map(createInventoryItem)}
    </ul>
  )

  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li key={name}>
        <img src={img} alt={""} />
        <h3>{name}</h3> 
        <h3>{displayPrice.toFixed(2)} {currencyFilter}</h3>
        <button onClick={() => onClickHandler(inventoryItem)}> 
          Add to cart 
        </button>
      </li> 
    )
  }
}