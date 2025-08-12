import React, { useState, useEffect } from 'react';
import { createContext, useContext, useRef } from 'react';

/*export const useToasts = () => {
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type = 'success') => {
    const id = Math.random().toString(36).substring(7); // Simple unique ID
    setToasts(prevToasts => [...prevToasts, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  };

  return { toasts, addToast, removeToast, ToastsComponent: () => (
    <ToastContainer position="top-end" className="p-3">
      {toasts.map(({ id, message, type }) => (
        <Toast key={id} onClose={() => removeToast(id)} show={true} delay={5000} autohide bg={type === 'success' ? 'success' : 'danger'}><Toast.Header><strong className="me-auto">{type === 'success' ? 'Success' : 'Error'}</strong></Toast.Header><Toast.Body>{message}</Toast.Body></Toast>
      ))}
    </ToastContainer>
  )};
};*/

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex > -1) {

      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <>

      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};