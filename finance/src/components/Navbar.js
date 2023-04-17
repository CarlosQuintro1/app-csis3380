//import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {

  return(
    <nav className="navbar">
  <div className="navbar-div">

    <ul className="navbar-ul">
      <li className="navbar-item">
        <Link to="/" className="nav-link">
          <img src='pep-sad.jpeg' alt='frog'></img>
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/" className="nav-link">
          PEPE FINANCE
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/Learn" className="nav-link">
          Learn
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/About" className="nav-link">
          About
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/Invest" className="nav-link">
          Invest
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/sign-up" className="nav-link">
          Sign Up
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/Login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/Transactions" className="nav-link">
          Transactions
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/Account" className="nav-link">
          My Account
        </Link>
      </li>

    </ul>

  </div>
</nav>

  );
  
}






