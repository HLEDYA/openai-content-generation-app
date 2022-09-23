import React from "react";
import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="md"
        collapseOnSelect
      >
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width="50px" />
          OpenAI React Demo App
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="product-description">Product Description</Nav.Link>
            <Nav.Link href="cold-emails">Cold Emails</Nav.Link>
            <Nav.Link href="tweets">Tweets</Nav.Link>
            <Nav.Link href="summarize">Summarize</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
