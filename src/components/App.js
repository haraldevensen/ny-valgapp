import React from "react"
import Signup from "./authentication/Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./google-drive/Profile"
import Login from "./authentication/Login"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./google-drive/UpdateProfile"
import Dashboard from "./google-drive/Dashboard"
import Avstemming from "./google-drive/Avstemming"
import Nominering from "./google-drive/Nominering"

function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
              {/* Drive */}
              <PrivateRoute exact path ="/" component ={Dashboard} />
              <PrivateRoute path="/avstemming" component={Avstemming} />
              <PrivateRoute path="/nominering" component={Nominering} />
              {/* Profile */}
              <PrivateRoute path="/user" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />

              {/* Auth */}
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App