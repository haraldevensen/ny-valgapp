import React from "react";
import Navbar from "./Navbar";
import { db } from "../firebase";
import { Button, Card, Row, CardGroup, Container } from "react-bootstrap";

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

  render() {
    return (
      <>
        <Navbar />
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ marginTop: "2vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <h2 className="text-center mb-2">Alle kandidater</h2>
          {this.state.users &&
            this.state.users.map((user) => {
              return (
                <Row>
                  <CardGroup>
                    <Card style={{ marginBottom:"1em"}}>
                      <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                          {user.nomtekst}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Button>Stem</Button>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </Row>
              );
            })}
            </div>
            </Container>
      </>
    );
  }
}

export default AvstemmingTest;