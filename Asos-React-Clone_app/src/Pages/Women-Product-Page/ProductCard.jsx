import React from 'react';
import { Button } from '@chakra-ui/react';

const ProductCard = ({ product, addToCart }) => {
  const { title, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3 style={{ fontWeight: '400' }}>{title}</h3>
      <h2 style={{ fontWeight: '700', color: 'black' }}>{price}</h2>
      <Button colorScheme="teal" size="lg" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;