// MenProductPage.jsx
import React ,{useState}from 'react';
import ReactPlayer from 'react-player';
import ProductList from './ProductList';
import  { useState } from 'react';

const MenProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, title: 'Product 1', price: '$20', image: '/src/Pages/Men-home-image/p1.webp' },
    { id: 2, title: 'Product 2', price: '$25', image: '/src/Pages/Men-home-image/p2.webp' },
    { id: 3, title: 'Product 3', price: '$30', image: '/src/Pages/Men-home-image/p3.webp' },
    { id: 4, title: 'Product 4', price: '$20', image: 'src/Pages/Men-home-image/p4.webp' },
    { id: 5, title: 'Product 5', price: '$20', image: 'src/Pages/Men-home-image/p5.webp' },
    { id: 6, title: 'Product 6', price: '$20', image: 'src/Pages/Men-home-image/p6.webp' },
    { id: 7, title: 'Product 7', price: '$20', image: 'src/Pages/Men-home-image/p7.webp' },
    { id: 8, title: 'Product 8', price: '$20', image: 'src/Pages/Men-home-image/p8.webp' },
    { id: 9, title: 'Product 9', price: '$20', image: 'src/Pages/Men-home-image/p9.webp' },
    { id: 10, title: 'Product 10', price: '$20', image: 'src/Pages/Men-home-image/p10.webp' },
    { id: 11, title: 'Product 11', price: '$20', image: 'src/Pages/Men-home-image/p11.webp' }
    // Add more product data as needed
  ];


  const addToCart = (product) =>{
    setCartItems([...CartItems,product])
  }

  return (
    <>
      <div style={{ position: 'relative', height: '50vh' }}>
        <ReactPlayer
          url="/src/Pages/Men-Product-Page/bannerVdo.mp4"
          playing={true}
          loop={true}
          width="100%"
          height="100%"
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          <h1>SUMMER PREP</h1>
          <h5>SHOP THE EDIT</h5>
        </div>
      </div>

      <div className="men-product-page">
        <h2 style={{textAlign:"center"}}>Men's Products</h2>
        <ProductList products={products} />
        <div className="men-product-page">
        <h2 style={{ textAlign: "center" }}>Men's Products</h2>
        <ProductList products={products} addToCart={addToCart} />
        {/* Add filters and pagination components here */}
        <Link to="/cart">Go to Cart</Link>
      </div>
      </div>
    </>
  );
};

export default MenProductPage;