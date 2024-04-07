/*
Authors: Lim Hui Ching, Elton Teo, Nicole Wong
Date: 1 April 2024
Summary: LoginSignup.jsx implements the functionality for users to sign up, 
including validation of form fields and creating a new user account.
*/
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import userpool from '../../userpool';
import './LoginSignup.css'

const LoginSignup = () => {
  const Navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [firstNameErr, setFirstNameErr] = useState('');

  const formInputChange = (formField, value) => {
    if (formField === 'username') setUsername(value);
    else if (formField === 'email') setEmail(value);
    else if (formField === 'password') setPassword(value);
    else if (formField === 'firstName') setFirstName(value);
  };

  const validation = () => {
    return new Promise((resolve, reject) => {
      if (!username || !email || !password || !firstName) {
        setUsernameErr(username ? '' : 'Username is required');
        setEmailErr(email ? '' : 'Email is required');
        setPasswordErr(password ? '' : 'Password is required');
        setFirstNameErr(firstName ? '' : 'First Name is required');
        resolve({
          username: username ? '' : 'Username is required',
          email: email ? '' : 'Email is required',
          password: password ? '' : 'Password is required',
          firstName: firstName ? '' : 'First Name is required',
        });
      } else if (password.length < 6) {
        setPasswordErr('Password must be at least 6 characters long');
        resolve({ password: 'Password must be at least 6 characters long' });
      } else if (!/\d/.test(password)) {
        setPasswordErr('Password must contain at least 1 number');
        resolve({ password: 'Password must contain at least 1 number' });
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        setPasswordErr('Password must contain at least 1 special character');
        resolve({
          password: 'Password must contain at least 1 special character',
        });
      } else if (!/[A-Z]/.test(password)) {
        setPasswordErr('Password must contain at least 1 uppercase letter');
        resolve({
          password: 'Password must contain at least 1 uppercase letter',
        });
      } else if (!/[a-z]/.test(password)) {
        setPasswordErr('Password must contain at least 1 lowercase letter');
        resolve({
          password: 'Password must contain at least 1 lowercase letter',
        });
      } else {
        resolve({ username: '', email: '', password: '', firstName: '' });
      }
    });
  };

  const handleClick = () => {
    setUsernameErr('');
    setEmailErr('');
    setPasswordErr('');
    setFirstNameErr('');
    validation()
      .then((res) => {
        if (!res.username && !res.email && !res.password && !res.firstName) {
          const attributeList = [
            new CognitoUserAttribute({ Name: 'email', Value: email }),
            new CognitoUserAttribute({ Name: 'given_name', Value: firstName }),
            // Add more attributes if needed
          ];
          userpool.signUp(
            username,
            password,
            attributeList,
            null,
            (err, data) => {
              if (err) {
                console.error(err);
                alert("Couldn't sign up");
              } else {
                console.log(data);
                //alert('User Added Successfully');
                Navigate('/confirmation', { state: { username } });
              }
            }
          );
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="signup">
      <Typography variant="h3" align="center" gutterBottom>
        Sign Up
      </Typography>
      <div className="form">
        <div className="formfield">
          <TextField
            value={username}
            onChange={(e) => formInputChange('username', e.target.value)}
            label="Username"
            helperText={usernameErr}
          />
        </div>
        <div className="formfield">
          <TextField
            value={email}
            onChange={(e) => formInputChange('email', e.target.value)}
            label="Email"
            helperText={emailErr}
          />
        </div>
        <div className="formfield">
          <TextField
            value={firstName}
            onChange={(e) => formInputChange('firstName', e.target.value)}
            label="First Name"
            helperText={firstNameErr}
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
          <div className="passwordRequirements">
            <p>Password requirements:</p>
            <ul>
              <li>Contains at least 1 number</li>
              <li>Contains at least 1 special character</li>
              <li>Contains at least 1 uppercase letter</li>
              <li>Contains at least 1 lowercase letter</li>
            </ul>
          </div>
        <div className="formfield">
          <Button
            type="submit"
            variant="contained"
            onClick={handleClick}
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;