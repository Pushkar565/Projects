import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import {  Alert, AlertIcon, Stack } from '@chakra-ui/react';

const IsAuth = ({ isAuthenticated, children }) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        setShowAlert(true);
      }, 5000); // 1 second interval
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return children;
  } else {
    return (
      <>
        <Navigate to="/SignIn" />
        <div>You are not authenticated</div>
        {showAlert && (
          <Stack spacing={3}>
            <Alert status='info'>
              <AlertIcon />
              Please sign in
            </Alert>
          </Stack>
        )}
      </>
    );
  }
};

export default IsAuth;