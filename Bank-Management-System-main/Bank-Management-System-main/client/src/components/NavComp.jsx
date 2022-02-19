import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navcomp.css";
function NavComp() {
  return (
    <Navbar bg="light" expand="lg" className="navComp">
      <Container>
        <Link className="link" to=".">
          <Navbar.Brand>BankManager</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link" to=".">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Nav.Link href="/transact">Transact</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComp;
