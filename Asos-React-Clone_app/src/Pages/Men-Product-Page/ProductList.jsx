// ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'; // Import the CSS file

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;