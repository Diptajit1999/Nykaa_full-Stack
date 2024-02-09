import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../component/Signup';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <Link to="/signup" style={linkStyle}>
        Signup
      </Link>
      <Link to="/login" style={linkStyle}>
        Login
      </Link>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  background: '#333',
  padding: '10px',
  color: '#fff',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  padding: '5px',
  fontSize: '16px',
};

export default Navbar;
