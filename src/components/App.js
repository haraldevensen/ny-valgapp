import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signup from "./authentication/Signup"
import Login from "./authentication/Login"
import ForgotPassword from "./authentication/ForgotPassword"


function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
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