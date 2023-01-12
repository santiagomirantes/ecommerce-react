import { createContext, Context, useState } from "react";
import Swal from "sweetalert2";

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
    if(mode === "remove") {
      Swal.fire({
        title: '¿Deseas eliminar el carrito?',
        text: "Esta acción no se puede deshacer",
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Por supuesto!',
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Hecho!',
            'Tu carrito ha sido eliminado',
            'success'
          )

          cart.forEach(i => {
            i.count = 0
          })

          changeCart([])
        }
      })
    }
    else{
      Swal.fire({
      title:"¿Confirmar compra?",
      icon:"warning",
      showCancelButton:true,
      confirmButtonText:"¡Por supuesto!",
      cancelButtonText:"Cancelar"
    })
    .then(res => {
      if(res.isConfirmed) {
      Swal.fire({
        title:"Hecho",
        text:"Gracias por apoyar a Pet´s Kingdom",
        icon:"success",
        confirmButtonText:"Aceptar"
      })
        changeCart([])
      }
    })
    }
  
  }

  const getFinalPrice = function() {
    let finalPrice = 0;
     cart.forEach(i => {
         finalPrice += i.precio * i.count
     })
     return finalPrice
  }

  const deleteProduct = function(id) {
    changeCart(cart.filter(i => {
      if(i.id === id) {
        i.count = 0
      }
      return i.id !== id
    }))
  }
  const data = {
    cart: cart,
    addToCart: addToCart,
    clearCart : clearCart,
    getFinalPrice: getFinalPrice,
    deleteProduct: deleteProduct
  };

  return <cartContext.Provider value={data}>{children}</cartContext.Provider>;
};
