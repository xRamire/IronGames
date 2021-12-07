import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

const authService = new AuthService()


const Navigation = ({ loggedUser, storeUser }) => {

    const logout = () => {
        authService.logout()
            .then(response => storeUser(null))
            .catch(err => console.log(err))
    }



    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/game-list">Videogames list</Nav.Link>
                    <Nav.Link as={Link} to="/user-list">User list</Nav.Link>


                    {loggedUser ?
                        <>
                            <Nav.Link as={Link} to="/my-profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to='/' onClick={logout}>Logout</Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navigation
