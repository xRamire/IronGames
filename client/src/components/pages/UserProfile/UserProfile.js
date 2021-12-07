import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserService from '../../../services/game.service'



class UserProfile extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            email: "",
            image: "",
            favs: ""
        }

        this.service = new UserService()
    }

    componentDidMount() {
        const id = this.props.match.params.id

        this.service.getUserDetails(id)
            .then(response => {
                const { username, email, image } = response.data

                this.setState({ username, email, image })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { username, email, image } = this.state

        return (
            <Container>
                <h1>Detalles</h1>

                <Row className="justify-content-around">
                    <Col md={6} style={{ overflow: "hidden" }}>
                        <article>
                            <h2>{username}</h2>
                            <div>
                                <p>{email}</p>
                                <hr />
                                <br />
                            </div>
                        </article>
                    </Col>
                    <Col md={4}>
                        <img src={image} alt='avatar' ></img>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default UserProfile