import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Col } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import Navbar from "./Navbar";

export default function UpdateProfile() {
  const emailRef = useRef();
  const nameRef = useRef();
  const valgbarRef = useRef();
  const phoneRef = useRef();
  const nomtekstRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const promises = [];
    setLoading(true);
    setError("");

    Promise.all(promises)
      .then(() => {
        history.push("/min-side");
      })
      .catch(() => {
        setError("Klarte ikke å oppdatere profil.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Navbar />
      <CenteredContainer>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Min side</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>E-post</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  readOnly
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group id="name">
                <Form.Label>Navn</Form.Label>
                <Form.Control
                  type="text"
                  ref={nameRef}
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Stiller du til valg?</Form.Label>
                  <Form.Control as="select" className="valgbar" name="valgbar" ref={valgbarRef}>
                    <option value="Ja">Ja</option>
                    <option value="Nei">Nei</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Telefonnummer</Form.Label>
                  <Form.Control type="text" name="phone" ref={phoneRef} />
                </Form.Group>
              </Form.Row>
              <Form.Group className="nominasjonstekst">
                <Form.Label>Nominasjonstekst</Form.Label>
                <Form.Control
                  type="text"
                  name="nomtekst"
                  as="textarea"
                  rows={5}
                  ref={nomtekstRef}
                />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Lagre
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Link to="/endre-passord">Endre passord</Link>
        </div>
      </CenteredContainer>
    </>
  );
}
