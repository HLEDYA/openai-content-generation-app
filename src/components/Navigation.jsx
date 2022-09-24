import React from "react";
import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
  const baseUrl = "/react-apps/openai-app/#/";
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
            <Nav.Link href={baseUrl + "product-description"}>
              Product Description
            </Nav.Link>
            <Nav.Link href={baseUrl + "cold-emails"}>Cold Emails</Nav.Link>
            <Nav.Link href={baseUrl + "tweets"}>Tweets</Nav.Link>
            <Nav.Link href={baseUrl + "summarize"}>Summarize</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
