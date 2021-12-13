import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

const authService = new AuthService()


function LoginPage(props) {
    
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        authService
            .login(login.username, login.password)
            .then(response => {
                props.storeUser(response.data)
                props.history.push("/game-list")

            })
            .catch(err => console.log(err.response.data.message))
    }


    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget

        setLogin({ ...login, [name]: value })
    }


    return (
            (
                <Container>
                    <Row>

                        <Col md={{ span: 4, offset: 4 }}>
                            <h2>Login</h2>
                            <hr />
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={handleInputChange} value={login.username} name="username" type="text" placeholder="Username" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={handleInputChange} value={login.password} name="password" type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>)
        )
}

export default LoginPage