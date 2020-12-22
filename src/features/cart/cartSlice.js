const initialCart = {};
export const cartReducer = (cart = initialCart, action) => {
  switch (action.type) {
    case 'cart/addItem': {
      const { name, price } = action.payload;
      
      // if the item already exists, increase the quantity by 1, otherwise set it to 1
      const quantity = cart[name] ? cart[name].quantity + 1 : 1;
      const newItem = { price, quantity };

      // Add the new item to the cart (or replace it if it existed already)
      return {...cart, [name]: newItem };
    }
    case 'cart/changeItemQuantity': { 
      const { name, newQuantity } = action.payload;

      const updatedItem = {
        ...cart[name], 
        quantity: newQuantity
      }

      return {
        ...cart,
        [name]: updatedItem
      }
    }
    default: {
      return cart;
    }
  }
}

/* 
addItem() is dispatched when the user clicks on "Add To Cart"
for a given item in the inventory.
- @param itemToAdd: an object with .price and .name properties.
- @returns: an action object of type 'cart/addItem' and the item
            as the payload
*/
export const addItem = (itemToAdd) => {
  return {
    type: 'cart/addItem',
    payload: itemToAdd
  };
}

/* 
changeItemQuantity() is dispatched when the user changes the quantity
of a given item already in their cart.
- @param itemName: the name of the item being changed
- @param newQuantity: the new quantity value for the item
- @returns: an action object of type 'cart/changeItemQuantity' and an
            object with the name and quantity as a payload.
*/
export const changeItemQuantity = (name, newQuantity) => {
  return {
    type: 'cart/changeItemQuantity',
    payload: { name, newQuantity }
  };
}