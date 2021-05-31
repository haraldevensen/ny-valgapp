import React, { useState } from "react";
import { db } from "../firebase";
import Navbar from "./Navbar";
import SentrertBoks from "./SentrertBoks";
import { Card, Form, Alert, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Nominering = () => {
  const [name, setName] = useState("");
  const [tlf, setTlf] = useState("");
  const [nomtekst, setNomtekst] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    db.collection("nominering")
      .add({
        name: name,
        tlf: tlf,
        nomtekst: nomtekst,
      })

      .then(() => {
        setMessage(
          "Din nominasjon er nå registrert. Du vil motta en e-post når den er godkjent av admin og har blitt publisert på avstemmingssiden."
        );
      })
      .catch((error) => {
        alert(error.message);
      });

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <SentrertBoks>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h2 className="text-center mb-4">Nominering</h2>
              {message && <Alert variant="success">{message}</Alert>}
              <Form.Group id="name">
                <Form.Label>Navn</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group id="tlf">
                <Form.Label>Telefonnummer</Form.Label>
                <Form.Control
                  value={tlf}
                  onChange={(e) => setTlf(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="nominasjonstekst">
                <Form.Label>Nominasjonstekst</Form.Label>
                <Form.Control
                  value={nomtekst}
                  onChange={(e) => setNomtekst(e.target.value)}
                  as="textarea"
                  rows={5}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                <FontAwesomeIcon icon={faPaperPlane} /> Send nominasjon
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </SentrertBoks>
    </>
  );
};

export default Nominering;
