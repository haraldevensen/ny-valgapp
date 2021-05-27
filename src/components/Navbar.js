import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function NavbarComponent() {
  // eslint-disable-next-line
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/innlogging");
    } catch {
      setError("Det skjedde en feil, vennligst prøv igjen");
    }
  }

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Vestfold valgapp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/avstemming">
            Avstemming
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/min-side">
            Min side
          </Nav.Link>
        </Nav>
        <Button variant="outline-info" onClick={handleLogout}>
          Logg ut
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
