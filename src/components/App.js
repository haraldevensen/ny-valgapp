import React from "react";
import "./App.css";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Avstemming from "./Avstemming";
import Dashboard from "./Dashboard";
import UpdatePassword from "./UpdatePassword";
import Nominering from "./Nominering"
import Support from "./Support"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Funksjoner */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/avstemming" component={Avstemming} />

          {/* Brukersider */}
          <PrivateRoute path="/min-side" component={UpdateProfile} />
          <PrivateRoute path="/endre-passord" component={UpdatePassword} />

          {/* Autenisering */}
          <Route path="/registrering" component={Signup} />
          <Route path="/innlogging" component={Login} />
          <Route path="/glemt-passord" component={ForgotPassword} />
          
          {/* Testing */}
          <PrivateRoute path="/nominering" component={Nominering} />
          <PrivateRoute path="/support" component={Support} />

        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
