import React from 'react';
import firebase from 'firebase/app'

import Button from '../FormElements/Button';

import './Navbar.css'

const Navbar = () => {
    const signOutHandler = async () => {
        try {
          await firebase.auth().signOut();
        } catch (error) {
          console.log(error.message);
        }
      };
    return (
        <nav className="Navbar">
            <a href="https://github.com/njohnny92">Source Code</a>
            <Button onClick={signOutHandler} className="logout-button">Sign Out</Button>
        </nav>
    )
}

export default Navbar;