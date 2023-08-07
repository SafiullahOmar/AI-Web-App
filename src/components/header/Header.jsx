import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Bar } from "react-chartjs-2";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-links">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Service</Nav.Link>
          <Nav.Link href="#link">Software</Nav.Link>
          <Nav.Link href="#link">AI</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div className="subscribeButton">
      <button>Subscribe</button>
    </div>
    </Container>
  </Navbar>
  );
}

export default Header;
