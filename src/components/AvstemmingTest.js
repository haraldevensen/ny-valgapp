import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "./Navbar";
import { db } from "../firebase";
import { Card, Form, Alert, Button, Col, Container } from "react-bootstrap";
import SentrertBoks from "./SentrertBoks";

const AvstemmingTest = () => {
  const { currentUser } = useAuth();
  const [setEmail] = useState("");
  const [vote, setVote] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleVote = (e) => {
    e.preventDefault();
    setLoading(true);

    db.collection("test")
      .add({
        email: currentUser.email,
        vote: vote,
      })

      .then(() => {
        setMessage("Din stemme er nå registrert.");
      })
      .catch((error) => {
        alert(error.message);
      });

    setLoading(false);
  };


 class AvstemmingTest extends React.Component {
    state = {
      users: null,
    };
  
    componentDidMount() {
      console.log("mounted");
      db.collection("users")
        .get()
        .then((snapshot) => {
          const users = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            users.push(data);
          });
          this.setState({ users: users });
          // console.log(snapshot)
        })
        .catch((error) => console.log(error));
    }

   render(){
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
                  required
                  readOnly
                  hidden
                />
              </Form.Group>
              {this.state.users &&
            this.state.users.map((user) => {
              return (
              <Form.Group id="studie">
                <Form.Label>Kandidat</Form.Label>
              
                <Form.Control
                  as="select"
                  value={vote}
                  onChange={(e) => setVote(e.target.value)}
                  required
                >
                  <option value="" disabled selected hidden></option>
                  <option value={user.phone}>{user.name}</option>
                </Form.Control>
              </Form.Group>
              );
            })}
              <Button disabled={loading} className="w-100" type="submit">
                Registrer stemme
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </SentrertBoks>
    </>
  );
 }
}
}

export default AvstemmingTest;