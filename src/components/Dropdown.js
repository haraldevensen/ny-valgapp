// Dropdown.js viser nedtrekksmenyen på Avstemmingssiden.

import React from "react";
import { db } from "../firebase";
import { Form } from "react-bootstrap";

class Dropdown extends React.Component {
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
        <div className="dropdown">
          <Form>
            <Form.Group id="studie">
              <Form.Label>Kandidat</Form.Label>
              <Form.Control as="select" required>
                <option selected disabled>
                  {" "}
                </option>
                {this.state.users &&
                  this.state.users.map((user) => {
                    return <option value={user.phone}>{user.name}</option>;
                  })}
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
      </>
    );
  }
}

export default Dropdown;
