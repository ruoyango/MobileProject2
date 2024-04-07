/*
Authors: Lim Hui Ching, Elton Teo, Go Ruo Yan, Nicole Wong
Date: 1 April 2024
Summary: ResetPassword.jsx allows users to reset their password by entering a verification code and a new password.
*/
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { resetPassword } from '../Services/Authentication';
import { useLocation, useNavigate } from "react-router-dom";
import './ResetPassword.css'

const ResetPassword = () => {

  const location = useLocation();
  let email = location.state.email;

  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleResetPassword = () => {
    // Reset previous error message
    setError('');

    // Check if verification code and new password are provided
    if (!verificationCode || !newPassword) {
      setError('Please enter the verification code and new password');
      return;
    }

    // Call resetPassword function from the authentication service
    resetPassword(email,verificationCode, newPassword)
      .then(() => {
        // If successful, redirect to login page
        navigate('/');
      })
      .catch((error) => {
        // If an error occurs, handle it
        setError(error.message); // Assuming the error object has a message property
      });
  };

  return (
    <div>
      <TextField
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        label="Verification Code"
      />
      <TextField
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        label="New Password"
        type="password"
      />
      <Button onClick={handleResetPassword}>Reset Password</Button>
      {error && <div>{error}</div>} {/* Display error message if any */}
    </div>
  );
};

export default ResetPassword;