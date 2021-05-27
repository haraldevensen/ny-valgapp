import React from "react";
import "./App.css";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Avstemming from "./Avstemming";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Funksjoner */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/avstemming" component={Avstemming} />

          {/* Brukersider */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          {/* Autenisering */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
