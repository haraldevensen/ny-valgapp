import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import SentrertBoksUtlogget from "./SentrertBoksUtlogget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export default function GlemtPassord() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Sjekk e-posten din for videre instruksjoner.");
    } catch {
      setError("Det skjedde en feil, vennligst prøv igjen.");
    }

    setLoading(false);
  }

  return (
    <SentrertBoksUtlogget>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Glemt passord</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>E-post</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Tilbakestill passord
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/innlogging">
              Logg inn <FontAwesomeIcon icon={faSignInAlt} />
            </Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Trenger du en konto?{" "}
        <Link to="/registrering">
          Registrer her <FontAwesomeIcon icon={faUserPlus} />
        </Link>
      </div>
    </SentrertBoksUtlogget>
  );
}
