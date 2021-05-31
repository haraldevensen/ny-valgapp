import React from "react";
import "./App.css";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Funksjoner (Innlogget bruker)
import MinSide from "./MinSide";
import Avstemming from "./Avstemming";
import Dashboard from "./Dashboard";
import EndrePassord from "./EndrePassord";
import Nominering from "./Nominering";
import Support from "./Support";

// Autentisering (Bruker ikke innlogget)
import LoggInn from "./autentisering/LoggInn";
import Registrering from "./autentisering/Registrering";
import GlemtPassord from "./autentisering/GlemtPassord";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Funksjoner */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/avstemming" component={Avstemming} />
          <PrivateRoute path="/nominering" component={Nominering} />
          <PrivateRoute path="/support" component={Support} />

          {/* Brukersider */}
          <PrivateRoute path="/min-side" component={MinSide} />
          <PrivateRoute path="/endre-passord" component={EndrePassord} />

          {/* Autenisering */}
          <Route path="/registrering" component={Registrering} />
          <Route path="/innlogging" component={LoggInn} />
          <Route path="/glemt-passord" component={GlemtPassord} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
