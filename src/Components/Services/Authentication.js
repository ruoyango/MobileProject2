/*
Authors: Lim Hui Ching, Elton Teo, Go Ruo Yan, Nicole Wong
Date: 1 April 2024
Summary: Authentication.js provides functions for user authentication, including 
login, forgot password, reset password, and sign-up confirmation.
*/
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userpool from '../../userpool';
export const authenticate=(Email,Password)=>{
    return new Promise((resolve,reject)=>{
        const user=new CognitoUser({
            Username:Email,
            Pool:userpool
        });

        const authDetails= new AuthenticationDetails({
            Username:Email,
            Password
        });

        user.authenticateUser(authDetails,{
            onSuccess:(result)=>{
                console.log("login successful");
                resolve(result);
            },
            onFailure:(err)=>{
                console.log("login failed",err);
                reject(err);
            }
        });
    });
};

export const forgotPassword = (email) => {
    return new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: email,
        Pool: userpool
      });
  
      user.forgotPassword({
        onSuccess: () => {
          resolve();
        },
        onFailure: (err) => {
          reject(err);
        }
      });
    });
  };
  
  export const resetPassword = (email, verificationCode, newPassword) => {
    return new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: email,
        Pool: userpool
      });
  
      user.confirmPassword(verificationCode, newPassword, {
        onSuccess: () => {
          resolve();
        },
        onFailure: (err) => {
          reject(err);
        }
      });
    });
  };

  export const confirmSignUp = (username, verificationCode) => {
    return new Promise((resolve, reject) => {
      const userData = {
        Username: username,
        Pool: userpool
      };
      const user = new CognitoUser(userData);
  
      user.confirmRegistration(verificationCode, true, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
  
  export const logout = () => {
    const user = userpool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  export const getCurrentUsername = () => {
    const user = userpool.getCurrentUser();
    if (user) {
      return user.getUsername();
    } else {
      return null;
    }
  };

  export const signOut = () => {
    const user = userpool.getCurrentUser();
    if (user) {
      user.signOut();
      console.log('User signed out successfully');
    } else {
      console.error('No user found to sign out');
    }
  };