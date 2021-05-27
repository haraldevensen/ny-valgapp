import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import Navbar from "./Navbar";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Det skjedde en feil, vennligst prøv igjen");
    }
  }

  return (
    <>
      <Navbar />
      <CenteredContainer>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profil</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>E-post:</strong> {currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Oppdater profil
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Logg ut
          </Button>
        </div>
      </CenteredContainer>
    </>
  );
}
