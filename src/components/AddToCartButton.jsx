import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '/home/user/my-react-app-js/src/context/CartContext';

const AddToCartButton = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Button onClick={() => addToCart(product)}>
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;