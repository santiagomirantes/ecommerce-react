import { createContext, Context, useState } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, changeCart] = useState([]);
  
  const addToCart = (product, count) => {
    if(cart.includes(product) === false && count > 0) {
    changeCart([...cart, product])
    }
    product.count += count 
  };

  const clearCart = function(mode) {
    let message;
    if(mode === "remove") {
      message = "¿Estás seguro que deseas borrar el carrito?";
    }
    else{
      message = "¿Deseas confirmar la compra?"
    }
    if(window.confirm(message)) {
      cart.forEach(i => {
        i.count = 0;
      })
      changeCart([])
    }
  
  }

  const getFinalPrice = function() {
    let finalPrice = 0;
     cart.forEach(i => {
         finalPrice += i.precio * i.count
     })
     return finalPrice
  }

  const data = {
    cart: cart,
    addToCart: addToCart,
    clearCart : clearCart,
    getFinalPrice: getFinalPrice
  };

  return <cartContext.Provider value={data}>{children}</cartContext.Provider>;
};
