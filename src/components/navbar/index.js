import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const makePink = {
    "background-color": "#fec5e5",
}

function Navigation() {
  const [activeKey, setActiveKey] = useState('#home');

  const handleBrandClick = () => {
    setActiveKey('#home');
  };

  return (
    <Navbar expand="lg" style={makePink}>
        
      <Container>
        <Navbar.Brand href="#home"  onClick={handleBrandClick}>Charli Harrold</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#photos">Photos</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;