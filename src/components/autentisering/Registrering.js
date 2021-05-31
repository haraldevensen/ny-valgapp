import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import SentrertBoks from "./SentrertBoks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export default function Registrering() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passordene er ikke like.");
    }
    if (!emailRef.current.value.includes("@usn.no")) {
      return setError("E-posten er ikke gyldig.");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Det skjedde en feil, vennligst prøv igjen.");
    }

    setLoading(false);
  }

  return (
    <SentrertBoks>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Registrering</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>E-post</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>
                Passord
                <Form.Text className="text-muted">
                  Passord må bestå av minst 6 tegn.
                </Form.Text>
              </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Gjenta passord</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Registrer <FontAwesomeIcon icon={faUserPlus} />
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Har du allerede en konto?{" "}
        <Link to="/innlogging">
          Logg inn <FontAwesomeIcon icon={faSignInAlt} />
        </Link>
      </div>
    </SentrertBoks>
  );
}
