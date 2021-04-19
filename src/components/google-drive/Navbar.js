import React, { useState } from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function NavbarComponent() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Utlogging feilet")
        }
    }

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Vestfold valgapp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Side 1</Nav.Link>
                    <Nav.Link href="#home">Side 2</Nav.Link>
                    <Nav.Link href="#home">Side 3</Nav.Link>
                    <Nav.Link as={Link} to="user">Side 4</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link as={Link} to="user">Min side</Nav.Link>
                </Nav>
                <Button variant="outline-info" onClick={handleLogout} >Logg ut</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}