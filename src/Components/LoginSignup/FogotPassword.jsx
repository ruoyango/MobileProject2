/*
Authors: Elton Teo
Date: 1 April 2024
Summary: FogotPassword.jsx provides a way for users to reset their 
password by sending a verification code to their email.
*/
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { forgotPassword } from '../Services/Authentication';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'

const ForgotPassword = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleForgotPassword = () => {
    // Reset previous messages
    setError('');
    setSuccessMessage('');

    // Check if email is valid
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Call forgotPassword function from the authentication service
    forgotPassword(email)
      .then(() => {
        // If successful, display success message
        setSuccessMessage('Verification code sent successfully');
        Navigate('/resetpassword', { state: { email }});
      })
      .catch((error) => {
        // If an error occurs, handle it
        setError(error.message); // Assuming the error object has a message property
      });
  };

  return (
    <div>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
      />
      <Button onClick={handleForgotPassword}>Send Verification Code</Button>
      {error && <div>Error: {error}</div>}
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
};

export default ForgotPassword;