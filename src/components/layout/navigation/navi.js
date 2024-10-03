import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import Logo from '../../images/Logo.png'
import './navi.style.css'


export default function navi() {
  return (
    <Navbar collapsibleonselect variant="dark" expand="lg" className=" shadow-sm fixed-top" >
        <Container fluid >
          <Navbar.Brand href='Home.js' >
            <img className='logo' src={Logo} alt='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='nav-block' id='nav-bl'>
              <Nav.Link className='nav-item' href="/">Home</Nav.Link>
              <Nav.Link className='nav-item' href="/about">About Us</Nav.Link>
              <Nav.Link className='nav-item' href="/menu">Menu</Nav.Link>
              <Nav.Link className='nav-item' href="/gallery">Gallery</Nav.Link>
              <Nav.Link className='nav-item' href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
        </Container>
    </Navbar>
  )
}
