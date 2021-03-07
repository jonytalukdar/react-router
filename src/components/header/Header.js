import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home">
        {' '}
        <img
          src="https://react-bootstrap.netlify.app/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/Home">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/About">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Portfolio">Portfolio</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/work">Work</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
