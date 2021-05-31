import React from "react";
import { Card } from "react-bootstrap";
import Navbar from "./Navbar";
import CenteredContainer from "./CenteredContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Support() {
  return (
    <>
      <Navbar />
      <CenteredContainer>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Support</h2>
            <p>Noe du ikke får til? Vi er her for å hjelpe deg!</p>
            <p>Vi er tilgjengelig på e-post og telefon.</p>
            <p>
              <strong>
                <FontAwesomeIcon icon={faEnvelope} /> E-post:{" "}
              </strong>
              <a href="mailto: mathiasjb@icloud.com">mathiasjb@icloud.com</a>
            </p>
            <p>
              <strong>
                <FontAwesomeIcon icon={faPhone} /> Telefon:{" "}
              </strong>{" "}
              48271214
            </p>
          </Card.Body>
        </Card>
      </CenteredContainer>
    </>
  );
}
