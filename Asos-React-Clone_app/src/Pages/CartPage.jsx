// CartPage.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import "./CartPage.css"

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const removeFromCart = (productId) => {
    console.log('Removing product with ID:', productId);
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleCheckout = () => {
    // Perform checkout logic here (e.g., send order to backend)
    setOrderPlaced(true);
    setShowAlert(true);
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <Button colorScheme='red' size='lg' onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <div>
          <h1 className='Total' >Total Price: ${calculateTotalPrice()}</h1>
          <Button colorScheme='teal' size='lg' onClick={handleCheckout}className='Checkout'>Checkout</Button>
          {orderPlaced && showAlert && (
            <Alert status='success' variant='subtle' flexDirection='column' alignItems='center' justifyContent='center' textAlign='center' height='200px'>
              <AlertIcon boxSize='40px' mr={0} />
              <AlertTitle mt={4} mb={1} fontSize='lg'>Order Placed</AlertTitle>
              <AlertDescription maxWidth='sm'>Thanks for shopping with us.</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;