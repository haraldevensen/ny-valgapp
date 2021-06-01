import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

export default function Landingsside() {
  return (
    <>
      <Navbar />
      <Container fluid>Content</Container>
      <div className="w-100 text-center mt-3">
        <Link to="/sandkasse">
          <FontAwesomeIcon icon={faKeyboard} /> Sandkasse (Prosjekt: Harald)
        </Link>
        <Link to="/dropdown">
           Dropdown
        </Link>
      </div>
    </>
  );
}
