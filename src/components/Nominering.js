import React, { useState } from "react";
import { db } from "../firebase";
import Navbar from "./Navbar";
import CenteredContainer from "./CenteredContainer";
import { Card, Form, Alert } from "react-bootstrap";

const Nominering = () => {
  const [name, setName] = useState("");
  const [tlf, setTlf] = useState("");
  const [nomtekst, setNomtekst] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    db.collection("users")
      .add({
        name: name,
        tlf: tlf,
        nomtekst: nomtekst,
      })
      
      .then(() => {
        setMessage("Din registrering er nå registrert. Du vil motta en e-post når den er godkjent av admin og har blitt publisert på avstemmingssiden.");
      })
      .catch((error) => {
        alert(error.message);
      });

      setLoading(false);
  };

  return (
    <>
      <Navbar />
      <CenteredContainer>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h2 className="text-center mb-4">Registrering</h2>
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
                />
              </Form.Group>
              <button type="submit">Submit</button>
            </Form>
          </Card.Body>
        </Card>
      </CenteredContainer>
    </>
  );
};

export default Nominering;
