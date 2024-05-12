// ProductCard.jsx
import { color } from 'framer-motion';
import React from 'react';
import { Button, } from '@chakra-ui/react'

const ProductCard = ({ product }) => {
  const { title, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3 style={{fontWeight:'400'}}>Lorem ipsum dolor sit amet consectetur adipisicing.{title}</h3>
      <h2 style={{fontWeight:"700",color:"black"} }>{price}</h2>
      <Button colorScheme='teal' size='lg'>
    Add to Cart
  </Button>
    </div>
  );
};

export default ProductCard;