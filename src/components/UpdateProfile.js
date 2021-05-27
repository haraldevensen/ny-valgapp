import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"
import Navbar from "./Navbar"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passordene samsvarer ikke.")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/user")
      })
      .catch(() => {
        setError("Klarte ikke å oppdatere profil")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return <>
  <Navbar />
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Min side</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>E-post</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Passord</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="La stå tomt for å beholde passord"
              />
              <Form.Text className="text-muted">
                Passordet må bestå av minst 6 tegn.
              </Form.Text>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Gjenta passord</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="La stå tomt for å beholde passord"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Oppdater
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/user">Avbryt</Link>
      </div>
    </CenteredContainer>
  </>
}