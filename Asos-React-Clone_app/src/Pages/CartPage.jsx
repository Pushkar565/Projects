// CartPage.jsx
import React, { useEffect, useState } from 'react'; // Added useState for showing order success
import { useSelector, useDispatch } from 'react-redux';
import { Button, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'; // Import Button and Alert components from Chakra UI

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false); // State for showing order success
  const [showAlert, setShowAlert] = useState(false); // State for showing the alert

  const removeFromCart = (productId) => {
    console.log('Removing product with ID:', productId); // Check if the correct ID is passed
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseInt(item.price.replace('$', '')), 0);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleCheckout = () => {
    // Perform checkout logic here (e.g., send order to backend)
    setOrderPlaced(true); // Set orderPlaced to true to show success component
    setShowAlert(true); // Show the alert
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
              <Button colorScheme='red' size='lg' onClick={() => removeFromCart(item.id)}>Remove</Button> {/* Remove button */}
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h4>Total Price: ${calculateTotalPrice()}</h4> {/* Display total price */}
        <Button colorScheme='teal' size='lg' onClick={handleCheckout}>Checkout</Button> {/* Checkout button */}
      </div>
      {orderPlaced && showAlert && (
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
          Order Place 
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Thanks You for shopping with us.
          </AlertDescription>
        </Alert>
      )} {/* Show the alert */}
    </div>
  );
};

export default CartPage;
