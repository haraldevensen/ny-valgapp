// SentrertBoks.js setter innholdsboksene i senter av skjermen.

import React from "react";
import { Container } from "react-bootstrap";

export default function SentrertBoks({ children }) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {children}
      </div>
    </Container>
  );
}
