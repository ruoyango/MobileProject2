import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { confirmSignUp } from '../Services/Authentication'; // Import function to handle confirmation
import { useLocation, useNavigate } from "react-router-dom";
import './ConfirmationPage.css'

const ConfirmationPage = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  let username = location.state.username;

  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleConfirmCode = () => {
    setError('');
    setSuccessMessage('');

    confirmSignUp(username,code) // Pass username and verification code to confirmSignUp function
      .then(() => {
        setSuccessMessage('Verification successful. You can now login.');
        Navigate('/');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div class="container">
      <Typography variant="h3" align="center" gutterBottom>
        Verify Email
      </Typography>
    <div class="form">
    <text class="text">We've sent a verification code to your email!</text>
      <TextField
        value={code}
        onChange={(e) => setCode(e.target.value)}
        label="Verification Code"
      />
      <Button onClick={handleConfirmCode}>Confirm Code</Button>
      {error && <div>Error: {error}</div>}
      {successMessage && <div>{successMessage}</div>}
    </div>
    </div>
  );
};

export default ConfirmationPage;