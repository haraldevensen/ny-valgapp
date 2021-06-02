import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/innlogging">
        Vestfold valgapp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link as={Link} to="/hjelp">
            <FontAwesomeIcon icon={faHeadset} /> Support
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
