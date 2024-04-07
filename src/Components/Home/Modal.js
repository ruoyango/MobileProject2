/*
Authors: Lim Hui Ching
Date: 1 April 2024
Summary: Modal.js implements a modal component that displays a 
confirmation dialog for logging out, allowing the user to either cancel 
the logout or proceed with it.
*/
import React from "react";
import "./Modal.css";
import { signOut } from '../Services/Authentication'; // Import logout function
import { useNavigate } from "react-router-dom";

function Modal({ setOpenModal }) {

  const Navigate = useNavigate();

  const handleLogout = () => {
    signOut(); // Call the logout function when user clicks "Continue"
    setOpenModal(false); // Close the modal after logout
    Navigate('/');
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are you sure you want to log out?</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={handleLogout}>Continue</button> {/* Call handleLogout when Continue button is clicked */}
        </div>
      </div>
    </div>
  );
}

export default Modal;