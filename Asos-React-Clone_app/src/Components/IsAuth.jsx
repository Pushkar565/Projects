import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react';

const IsAuth = ({ isAuthenticated, children }) => {
  const [showAlert, setShowAlert] = useState(false); // Changed to false initially

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        setShowAlert(true);
      }, 2000); // 2 second interval
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/SignIn" />; // Redirect to login page or another appropriate route
  }

  return (
    <>
      {showAlert && (
        <Stack spacing={3} m={4}>
          <Alert status="success" variant="subtle" flexDirection="row" alignItems="center" justifyContent="center">
            <AlertIcon />
            You are authenticated!
          </Alert>
        </Stack>
      )}
      {children}
    </>
  );
};

export default IsAuth;
