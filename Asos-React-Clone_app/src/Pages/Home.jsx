import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className='home'>
       
        <Link to="/womenproductpage">
        <img
            src='src/Pages/home-image/HomeHero.avif'
            alt=''
            className='hero-image'
          />
        </Link>
          <div className='hero-links'>
            <Link to='/womenproductpage'>
            <img className="hero-link-img"  src='src/Pages/home-image/h1.avif' alt='' />
            </Link>
            <Link to='/womenproductpage'>
              <img className="hero-link-img" src='src/Pages/home-image/h2.avif' alt='' />
            </Link>
            <Link to='/womenproductpage'>
              <img className="hero-link-img" src='src/Pages/home-image/h3.avif' alt='' />
            </Link>
            <Link to='/womenproductpage'>
              <img className="hero-link-img" src='src/Pages/home-image/h4.avif' alt='' />
            </Link>
          </div>
          <img
            src='src/Pages/home-image/banner.png'
            alt=''
            className='banner-image'
          />
          <div className='hero2-section'>
            <picture>
              <Link to='/womenproductpage'>
                <img src='src/Pages/home-image/Hero2.webp' alt='' />
              </Link>
            </picture>
          </div>
      
        <div className='button-links'>
          <Link to="/womenproductpage">
            <img src='src\\Pages\\home-image\\btnImg1.avif' alt='' />
          </Link>
          <Link to="/womenproductpage">
            <img src='src\\Pages\\home-image\\btnImg2.avif' alt='' />
          </Link>
        </div>
        <div className='banner2-section'>
          <Link to="/womenproductpage">
            <img src='src\\Pages\\home-image\\banner2.png' alt='' />
          </Link >
        </div>
        <h2 className='trending-brands-title'>Trending Brands</h2>
        <ul className='trending-brands'>
          <li>
            <Link to="/womenproductpage">
              <img src='src\\Pages\\home-image\\tb1.webp' alt='' />
            </Link>
          </li>
          <li>
            <Link to="/womenproductpage">
              <img src='src\\Pages\\home-image\\tb2.avif' alt='' />
            </Link>
          </li>
          <li>
            <Link to="/womenproductpage">
              <img src='src\\Pages\\home-image\\tb3.avif' alt='' />
            </Link>
          </li>
          <li>
            <Link to="/womenproductpage">
              <img src='src\\Pages\\home-image\\tb4.avif' alt='' />
            </Link>
          </li>
          <li>
            <Link to="/womenproductpage">
              <img src='src\\Pages\\home-image\\tb5.webp' alt='' />
            </Link>
          </li>
        </ul>
         
      </div>
     
     
    </>
    
  );
};

export default Home;
