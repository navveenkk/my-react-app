import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';

import AddToCartButton from '../components/AddToCartButton';

const ProductItem = ({ product }) => {
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
        <AddToCartButton product={product} />
      </CardBody>
    </Card>
  );
};

export default ProductItem;