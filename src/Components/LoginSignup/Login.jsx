import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../Services/Authentication';
import './Login.css'
import userpool from '../../userpool';

const Login = () => {
  const Navigate = useNavigate();

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailOrUsernameErr, setEmailOrUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [loginErr, setLoginErr] = useState('');

  const formInputChange = (formField, value) => {
    if (formField === 'emailOrUsername') {
      setEmailOrUsername(value);
    }
    if (formField === 'password') {
      setPassword(value);
    }
  };

  const validation = () => {
    return new Promise((resolve, reject) => {
      if (emailOrUsername === '' && password === '') {
        setEmailOrUsernameErr('Email or Username is Required');
        setPasswordErr('Password is required');
        resolve({
          emailOrUsername: 'Email or Username is Required',
          password: 'Password is required',
        });
      } else if (emailOrUsername === '') {
        setEmailOrUsernameErr('Email or Username is Required');
        resolve({ emailOrUsername: 'Email or Username is Required', password: '' });
      } else if (password === '') {
        setPasswordErr('Password is required');
        resolve({ emailOrUsername: '', password: 'Password is required' });
      } else if (password.length < 6) {
        setPasswordErr('Password must be 6 characters long');
        resolve({ emailOrUsername: '', password: 'Password must be 6 characters long' });
      } else {
        resolve({ emailOrUsername: '', password: '' });
      }
    });
  };

  const handleLogin = () => {
    setEmailOrUsernameErr('');
    setPasswordErr('');
    validation()
      .then((res) => {
        if (res.emailOrUsername === '' && res.password === '') {
          authenticate(emailOrUsername, password)
            .then((data) => {
              setLoginErr('');
              Navigate('/addpost');
            })
            .catch((err) => {
              console.log(err);
              setLoginErr(err.message);
            });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSignUp = () => {
    // Redirect to sign up page
    Navigate('/signup');
  };

  const handleForgotPassword = () => {
    // Redirect to forgot password page
    Navigate('/forgotpassword');
  };

  return (
    <div className="login">
      <div className="form">
        <div className="formfield">
          <TextField
            value={emailOrUsername}
            onChange={(e) => formInputChange('emailOrUsername', e.target.value)}
            label="Email or Username"
            helperText={emailOrUsernameErr}
          />
        </div>
        <div className="formfield">
          <TextField
            value={password}
            onChange={(e) => formInputChange('password', e.target.value)}
            type="password"
            label="Password"
            helperText={passwordErr}
          />
        </div>
        <div className="formfield">
          <Button type="submit" variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </div>
        <Typography variant="body">{loginErr}</Typography>
        <div className="formfield">
          <Button variant="text" onClick={handleSignUp}>
            Sign Up
          </Button>
          <Button variant="text" onClick={handleForgotPassword}>
            Forgot Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;