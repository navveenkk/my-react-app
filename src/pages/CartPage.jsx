import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import Pagination from '../components/Pagination.jsx';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cartItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalItems = cartItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="container p-5">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items-container">
            {currentItems.map(item => (
              <div key={item.id} className="cart-item p-3 mb-3 border rounded d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '15px', objectFit: 'cover' }} className="rounded" />
                  )}
                  <div className="flex-grow-1">
                    <h5>{item.name}</h5>
                    <p>₹{item.price} x {item.quantity}</p>
                  </div>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
 <Pagination
 itemsPerPage={itemsPerPage}
 totalItems={totalItems}
 currentPage={currentPage}
 paginate={paginate}
 />
        </>
      )}
    </div>
  );
};

export default CartPage;