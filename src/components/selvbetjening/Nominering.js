import React, { useState } from "react";
import { db } from "../../firebase";
import Navbar from "../Navbar";
import SentrertBoks from "../SentrertBoks";
import { Card, Form, Alert, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AuthContext";

const Nominering = () => {
  const { currentUser } = useAuth()
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tlf, setTlf] = useState("");
  const [nomtekst, setNomtekst] = useState("");
  const [studie, setStudie] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    db.collection("nominering")
      .add({
        email: currentUser.email,
        name: name,
        tlf: tlf,
        nomtekst: nomtekst,
        studie: studie,
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
              <Form.Group id="email">
                <Form.Label>E-post</Form.Label>
                <Form.Control
                  value={currentUser.email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  readOnly
                />
              </Form.Group>
              <Form.Group id="name">
                <Form.Label>Navn</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} id="studie">
                  <Form.Label>Studieretning</Form.Label>
                  <Form.Control
                    as="select"
                    value={studie}
                    onChange={(e) => setStudie(e.target.value)}
                    required
                  >
                    <option value="" disabled selected hidden></option>
                    <option value="" disabled>
                      IT og informasjonssystemer
                    </option>
                    <option value="IT1">ITIS 1.år</option>
                    <option value="IT2">ITIS 2.år</option>
                    <option value="IT3">ITIS 3.år</option>
                    <option value="" disabled>
                      Økonomi og ledelse
                    </option>
                    <option value="OKLED1">ØKLED 1.år</option>
                    <option value="OKLED2">ØKLED 2.år</option>
                    <option value="OKLED3">ØKLED 3.år</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} id="tlf">
                  <Form.Label>Telefonnummer</Form.Label>
                  <Form.Control
                    value={tlf}
                    onChange={(e) => setTlf(e.target.value)}
                    required
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group className="nominasjonstekst">
                <Form.Label>
                  Nominasjonstekst
                  <Form.Text className="text-muted">
                    "ENDRE/SLETT MEG før innlevering"
                  </Form.Text>
                </Form.Label>
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
