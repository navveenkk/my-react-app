import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem from '/home/user/my-react-app-js/src/components/ProductItem.jsx';

const CartProductGrid = ({ items }) => {
  return (
    <Row className="mb-5">
      {items.map(item => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="px-1 gy-2"> {/* Adjusted column sizes for better responsiveness */}
          <ProductItem
            product={item}
            isCart={true}
            itemQuantity={item.quantity}
            onRemove={item.removeFromCart}
 />
        </Col>
      ))}
    </Row>
  );
};

export default CartProductGrid;