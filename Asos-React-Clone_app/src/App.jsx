import React from 'react';
import {  Routes, Route } from 'react-router-dom'; 
// import './App.css';
import Home from './Pages/Home'; 
import MenHome from './Pages/MenHome'; 
import Navbar from './Components/Navbar';
import TopHead from './Components/TopHead';
import Footer from './Components/Footer';
import MenProductPage from './Pages/Men-Product-Page/MenProductPage';
import Dropdown from './Components/Dropdown';
import WomenProductPage from './Pages/Women-Product-Page/Women-Product-Page';
import SignIn from './Pages/SignIn';
import CartPage from './Components/CartPage';




function App() {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (productToRemove) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productToRemove.id);
    setCartItems(updatedCartItems);
  };

  return (

     <>
     <TopHead/>
    <Navbar/>
    <Dropdown />
    
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/MenHome' element={<MenHome />} /> 
        <Route path='/MenProductPage' element={<MenProductPage/>} /> 
        <Route path='/WomenProductPage' element={<WomenProductPage/>} /> 
        <Route path='/SignIn' element={<SignIn/>} />
       
      </Routes>

      <Footer/>

      </>
  );
}

export default App;
