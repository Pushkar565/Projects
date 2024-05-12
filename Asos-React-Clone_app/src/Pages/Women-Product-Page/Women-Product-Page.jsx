import React from 'react';
import ProductList from '../Men-Product-Page/ProductList';

const WomenProductPage = () => {
  const products = [
    { id: 1, title: 'Product 1', price: '$20', image: 'src/Pages/Women-home-image/p1.webp' },
    { id: 2, title: 'Product 2', price: '$25', image: '/src/Pages/Women-home-image/p2.webp' },
    { id: 3, title: 'Product 3', price: '$30', image: '/src/Pages/Women-home-image/p3.webp' },
    { id: 4, title: 'Product 4', price: '$20', image: '/src/Pages/Women-home-image/p4.jpg' },
    { id: 5, title: 'Product 5', price: '$20', image: '/src/Pages/Women-home-image/p5.webp' },
    { id: 6, title: 'Product 6', price: '$20', image: '/src/Pages/Women-home-image/p6.webp' },
    { id: 7, title: 'Product 7', price: '$20', image: '/src/Pages/Women-home-image/p7.webp' },
    { id: 8, title: 'Product 8', price: '$20', image: '/src/Pages/Women-home-image/p8.webp' },
    { id: 9, title: 'Product 9', price: '$20', image: '/src/Pages/Women-home-image/p9.webp' },
    { id: 10, title: 'Product 10', price: '$20', image: '/src/Pages/Women-home-image/p10.webp' },
    { id: 11, title: 'Product 11', price: '$20', image: '/src/Pages/Women-home-image/p11.webp' }
  ];

  return (
    <div className="women-product-page">
      <h2 style={{ textAlign: 'center' }}>Women's Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default WomenProductPage;