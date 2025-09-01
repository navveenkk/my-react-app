import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '/home/user/my-react-app-js/src/context/CartContext';
import Pagination from '../components/Pagination.jsx';
import siteData from '../data'; 
import CartProductGrid from '/home/user/my-react-app-js/src/components/CartProductGrid.jsx';
import Button from 'react-bootstrap/Button';
 
const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const totalPages = Math.ceil(cartItems.length / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [cartItems, currentPage, itemsPerPage]); // Added itemsPerPage to dependencies

  const cartProducts = siteData.products.filter(product =>
    cartItems.some(item => item.id === product.id)
  );

  const enhancedCartItems = cartProducts.map(product => {
    const cartItem = cartItems.find(item => item.id === product.id);
    return { ...product, quantity: cartItem.quantity, removeFromCart };
  });


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCartItems = enhancedCartItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalAmount = enhancedCartItems.reduce((sum, item) => {
    const product = siteData.products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalItems = enhancedCartItems.length; // This should be calculated before using it in Pagination
  return (
    <div className="p-6" style={{minHeight: '60vh'}}>
      {cartItems.length === 0 ? (
        <div className="mt-5">
        <i className="bi bi-bag-x icon-large text-white"></i>
        <p className="fs-2 text-white">Your cart is empty.</p>
        </div>
      ) : (
        <>
        <CartProductGrid key={currentPage} items={currentCartItems} />
        {cartItems.length > 0 && (
          <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems}currentPage={currentPage} paginate={paginate} />
        )}
        <div className="flex justify-between items-center mb-4">
          <h2 className="">Total: ₹ {totalAmount.toFixed(2)}</h2>
          <Button variant="primary" size="lg">Check Out</Button>
        </div>
        </>
      )}
 </div>
);
};

export default CartPage;