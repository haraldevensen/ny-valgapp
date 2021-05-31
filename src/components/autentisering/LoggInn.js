import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import SentrertBoksUtlogget from "./SentrertBoksUtlogget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function LoggInn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Det skjedde en feil, vennligst prøv igjen.");
    }

    setLoading(false);
  }

  return (
    <SentrertBoksUtlogget>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Logg inn</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>E-post</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Passord</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Logg inn <FontAwesomeIcon icon={faSignInAlt} />
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/glemt-passord">Glemt passord?</Link>
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
