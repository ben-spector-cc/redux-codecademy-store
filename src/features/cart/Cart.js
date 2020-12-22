import React from 'react';
import { calculateTotal } from '../../utilities/utilities.js';
import { changeItemQuantity } from './cartSlice.js';
// Import the changeItemQuantity() action creator.

export const Cart = (props) => {
  const { cart, currencyFilter, dispatch } = props;

  const onInputChangeHandler = (name, input) => {
    // If the user enters a bad value...
    if (input === '') {
      return;
    }

    // Otherwise, convert the input into a number and pass it along as the newQuantity.
    const newQuantity = Number(input);

    // Dispatch an action to change the quantity of the given name and quantity.
    dispatch(changeItemQuantity(name, newQuantity));
  };

  const cartElements = Object.keys(cart).map(createCartItem);
  const total = calculateTotal(cart, currencyFilter);

  return (
    <div id="cart-container">
      <h1>Cart</h1>
      <ul id="cart-items">{cartElements}</ul>
      <h3>
        Total: {total} {currencyFilter}
      </h3>
    </div>
  );

  function createCartItem(name) {
    const item = cart[name];

    if (item.quantity === 0) {
      return;
    }

    return (
      <li key={name}>
        <p>{name}</p>
        <input
          className="quantity"
          id={name + '-quantity'}
          type="number"
          value={item.quantity}
          onChange={(e) => onInputChangeHandler(name, e.target.value)}
          min="0"
        />
      </li>
    );
  }
};
