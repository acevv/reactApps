import React from "react";

const CartContext = React.createContext(
  {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  },
  console.log("LOG FROM cart-context -> cartReducer")
);

export default CartContext;
