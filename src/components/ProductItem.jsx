import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Badge } from 'react-bootstrap';

import AddToCartButton from '../components/AddToCartButton';

const ProductItem = ({ product, isCart, itemQuantity, onRemove }) => {
  return (
    <Card className="p-0 rounded-5">
      <Card.Img className="img-fluid rounded-5" variant="top" src={product.imageUrl} alt={product.name} />
      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <CardText style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }} className="text-overflow: ellipsis;">
          {product.description}
        </CardText>
        <CardText>
          Price: ₹{product.price.toFixed(2)}
        </CardText>

        {isCart ? (
          <>
            {itemQuantity !== undefined && (
              <CardText>
                <p>Quantity: <Badge bg="success">{itemQuantity}</Badge></p>
              </CardText>
            )}
            {onRemove && (
              <Button variant="danger" onClick={() => onRemove(product.id)}>Remove</Button>
            )}
          </>
        ) : (<AddToCartButton product={product} />)}
      </CardBody>
    </Card>
  );
};

export default ProductItem;