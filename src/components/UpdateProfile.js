import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Col } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faUserShield } from "@fortawesome/free-solid-svg-icons";

export default function UpdateProfile() {
  const emailRef = useRef();
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
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/endre-passord">
                <FontAwesomeIcon icon={faUserShield} /> Endre passord
              </Link>
            </div>
          </Card.Body>
        </Card>
      </CenteredContainer>
    </>
  );
}
