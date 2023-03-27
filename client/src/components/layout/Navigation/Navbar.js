import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import logo from '../../../assets/images/ironhack-1.svg'

const authService = new AuthService()

const Navigation = ({ loggedUser, storeUser }) => {

    const logout = () => {
        authService.logout()
            .then(response => storeUser(null))
            .catch(err => console.log(err))
    }

    return (
        <nav>

            <Container>
                <div className='title-logo'>
                    <img className='logo' src={logo} alt='logo'></img>
                    <Navbar.Brand className='title' as={Link} to='/'>IronGames</Navbar.Brand>
                </div>
                <Nav className="nav">
                    <Nav.Link className='link' as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className='link' as={Link} to="/game-list">Videogames</Nav.Link>
                    <Nav.Link className='link' as={Link} to="/user-list">Users</Nav.Link>

                    {loggedUser ?
                        <>
                            <Nav.Link className='link' as={Link} to="/my-profile">Profile</Nav.Link>
                            <Nav.Link className='link' as={Link} to='/' onClick={logout}>Logout</Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link className='link' as={Link} to="/signup">Signup</Nav.Link>
                            <Nav.Link className='link' as={Link} to="/login">Login</Nav.Link>

                        </>
                    }
                </Nav>
            </Container>
        </nav>
    )
}

export default Navigation
