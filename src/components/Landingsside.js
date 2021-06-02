// Landingsside. js er siden man kommer til etter man er logget inn eller registrert bruker. Den forteller litt om hva Vestfold valgapp gjør.

import React from "react";
import { Card } from "react-bootstrap";
import Navbar from "./Navbar";
import SentrertBoks from "./SentrertBoks";

export default function Landingsside() {
  return (
    <>
      <Navbar />
      <div className="Support">
        <SentrertBoks>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Velkommen!</h2>
              <Card.Text>
                Dette er en applikasjon laget til studentrådsvalget på USN
                Vestfold. <br />
                <br />
                Applikasjonen har flere ulike funksjoner:
                <ul>
                  <li>registrer og logg inn på applikasjon</li>
                  <li>
                    nominer deg selv og send til godkjenning hos administrator
                  </li>
                  <li>
                    vis godkjente kandidater og les deres nominasjonstekst
                  </li>
                  <li>avgi stemme på den du ønsker til studentråd</li>
                  <li>
                    navigere til supportside og få kontaktinformasjon til
                    support
                  </li>
                  <li>funksjon for glemt passord og bytt passord</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </SentrertBoks>
      </div>
    </>
  );
}
