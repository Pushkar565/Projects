import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home'; 
import MenHome from './Pages/MenHome'; 
import Navbar from './Components/Navbar';
import TopHead from './Components/TopHead';
import Footer from './Components/Footer';
import MenProductPage from './Pages/Men-Product-Page/MenProductPage';

import Dropdown from './Components/Dropdown';
import WomenProductPage from './Pages/Women-Product-Page/Women-Product-Page';
import SignIn from './Pages/SignIn';
import IsAuth from './Components/IsAuth'; // Import the IsAuth component
import CartPage from './Pages/CartPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]); // Add cart state

  const handleLogin = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <TopHead/>
      <Navbar/>
      <Dropdown />
      
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/MenHome' element={<MenHome />}/>  
        <Route path='/MenProductPage' element={<MenProductPage cart={cart} setCart={setCart} />} />
        <Route path='/CartPage' element={<CartPage cart={cart} />} />

        <Route path='/WomenProductPage' element={
          <IsAuth isAuthenticated={isAuthenticated}>
            <WomenProductPage/>
          </IsAuth>
        } /> 
       
        <Route path='/SignIn' element={<SignIn onLogin={handleLogin} />} />
       
      </Routes>

      <Footer/>
    </>
  );
}

export default App;