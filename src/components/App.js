import React from "react";
import "./App.css";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Sider (Innlogget bruker)
import Avstemming from "./Avstemming";
import Landingsside from "./Landingsside";
import Support from "./Support";

// Selvbetjente sider (Innlogget bruker)
import MinSide from "./selvbetjening/MinSide";
import EndrePassord from "./selvbetjening/EndrePassord";
import Nominering from "./selvbetjening/Nominering";

// Autentisering (Bruker ikke innlogget)
import LoggInn from "./autentisering/LoggInn";
import Registrering from "./autentisering/Registrering";
import GlemtPassord from "./autentisering/GlemtPassord";
import Hjelp from "./autentisering/Hjelp";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Funksjoner */}
          <PrivateRoute exact path="/" component={Landingsside} />
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
          <Route path="/hjelp" component={Hjelp} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
