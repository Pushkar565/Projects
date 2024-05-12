// ProductCard.jsx
import React from 'react';
import { Button } from '@chakra-ui/react';

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <Button colorScheme='teal' size='md' onClick={() => handleAddToCart(product)}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;