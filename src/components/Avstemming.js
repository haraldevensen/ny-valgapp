import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { Card, Form, Alert, Button } from "react-bootstrap";
import SentrertBoks from "./SentrertBoks";
import Dropdown from "./Dropdown";
import Kandidater from "./Kandidater";
import Navbar from "./Navbar";

const Avstemming = () => {
  const { currentUser } = useAuth();
  const [setEmail] = useState("");
  const [studentNr, setStudentNr] = useState("");
  const [vote, setVote] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleVote = (e) => {
    e.preventDefault();
    setLoading(true);

    db.collection("votes")
      .add({
        email: currentUser.email,
        vote: vote,
        studentNr: studentNr,
      })

      .then(() => {
        setMessage("Din stemme er nå registrert/oppdatert.");
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
            <Form onSubmit={handleVote}>
              <h2 className="text-center mb-4">Stem her!</h2>
              {message && <Alert variant="success">{message}</Alert>}
              <Form.Group id="email">
                <Form.Control
                  value={currentUser.email}
                  onChange={(e) => setEmail(e.target.value)}
                  hidden
                />
              </Form.Group>
              <Form.Control
                value={vote}
                onChange={(e) => setVote(e.target.value)}
                hidden
              />
              <Dropdown />
              <Form.Group>
                <Form.Group id="studentNr">
                  <Form.Label>
                    Bekreft med studentnummeret på kandidat
                  </Form.Label>
                  <Form.Control
                    value={studentNr}
                    onChange={(e) => setStudentNr(e.target.value)}
                    required
                  />
                </Form.Group>
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Registrer stemme
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Kandidater />
      </SentrertBoks>
    </>
  );
};

export default Avstemming;
