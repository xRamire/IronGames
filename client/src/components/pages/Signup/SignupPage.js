import React, { Component, useEffect, useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'


const authService = new AuthService()


function SignupPage(props) {
    
    const [signup, setSignup] = useState({
        username: "",
        password: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        authService
            .signup(signup.username, signup.password, signup.email)
            .then(response => {
                props.storeUser(response.data)
            })
            .catch(err => console.log(err.response.data.message))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget

        setSignup({ ...signup, [name]: value })
    }




    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <h2>Registro</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={handleInputChange} value={signup.username} name="username" type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={handleInputChange} value={signup.email} name="email" type="text" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleInputChange} value={signup.password} name="password" type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}



export default SignupPage




















// class SignupPage extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             username: "",
//             password: "",
//             email: "",
//         }

//         this.authService = new AuthService()
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();

//         this.authService.signup(this.state.username, this.state.password, this.state.email)
//             .then(response => {
//                 this.props.storeUser(response.data)
//             })
//             .catch(err => console.log(err.response.data.message))
//     }

//     handleInputChange = (e) => {
//         const { name, value } = e.currentTarget

//         this.setState({ [name]: value })
//     }

//     render() {
//         return (
//             <Container>
//                 <Row>
//                     <Col md={{ span: 4, offset: 4 }}>
//                         <h2>Registro</h2>

//                         <Form onSubmit={this.handleSubmit}>
//                             <Form.Group className="mb-3" controlId="username">
//                                 <Form.Label>Username</Form.Label>
//                                 <Form.Control onChange={this.handleInputChange} value={this.state.username} name="username" type="text" placeholder="Username" />
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="email">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control onChange={this.handleInputChange} value={this.state.email} name="email" type="text" placeholder="Email" />
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="password">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" placeholder="Password" />
//                             </Form.Group>

//                             <Button variant="primary" type="submit">
//                                 Submit
//                             </Button>
//                         </Form>
//                     </Col>
//                 </Row>
//             </Container>
//         )
//     }

// }

// export default SignupPage