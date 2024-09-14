// src/components/Header.js
import React from 'react';
import { Navbar, Container , Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Css Folder/header.css';

const Header = () => {
  
    const linkStyle = {
      color: '#fff',
      textDecoration: 'none',
      padding: '10px 15px',
      transition: 'background-color 0.3s',
    };
  
    const linkHoverStyle = {
      backgroundColor: '#575757',
    };
  
    
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#" className="brand-style">
          
    <img
        src={require('../Components/Photos/Logo.jpg')}
        width="80"
        height="50"
        className="d-inline-block align-top"
        alt=''
      />

         <p className='tag'>Ferozepur(PB05) News Channel</p> </Navbar.Brand>

         <div className='navbar'>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Link to="/" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Home</Link>
          <Link to="/About" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>About</Link>
          <Link to="/News" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>NewsFeed</Link>
          <Link to="/Contact" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Contact Us</Link>
          </Nav>
          
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>


    </>
  );
};

export default Header;
