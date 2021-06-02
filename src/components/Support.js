// Support.js fungerer som en side for å få hjelp. Fungerer helt likt som Hjelp.js

import React from "react";
import { Card } from "react-bootstrap";
import Navbar from "./Navbar";
import SentrertBoks from "./SentrertBoks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../firebase";

class Support extends React.Component {
  state = {
    chats: null,
  };

  componentDidMount() {
    console.log("mounted");
    db.collection("chats")
      .get()
      .then((snapshot) => {
        const chats = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          chats.push(data);
        });
        this.setState({ chats: chats });
        // console.log(snapshot)
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="Support">
          <SentrertBoks>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Support</h2>
                <Card.Text>
                  Noe du ikke får til? Vi er her for å hjelpe deg!
                </Card.Text>
                <Card.Text>
                  Vi er tilgjengelig på e-post, telefon og livechat.
                </Card.Text>
                <Card.Text>
                  <strong>
                    <FontAwesomeIcon icon={faEnvelope} /> &nbsp;{" "}
                  </strong>
                  <a href="mailto: mathiasjb@icloud.com">
                    mathiasjb@icloud.com
                  </a>
                </Card.Text>
                <Card.Text>
                  <strong>
                    <FontAwesomeIcon icon={faPhone} /> &nbsp;{" "}
                  </strong>{" "}
                  48271214
                </Card.Text>
                {this.state.chats &&
                  this.state.chats.map((chat) => {
                    return (
                      <Card.Text>
                        <strong>
                          <FontAwesomeIcon icon={faComments} />
                          &nbsp;{" "}
                        </strong>
                        {chat.tilgjengelighet}
                      </Card.Text>
                    );
                  })}
              </Card.Body>
            </Card>
          </SentrertBoks>
        </div>
      </>
    );
  }
}

export default Support;
