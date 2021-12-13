import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserService from '../../../services/user.service'

const userService = new UserService()

function UserProfile(props) {
    
    const [profile, setProfile] = useState({
        username: "",
        password: "",
        email: "",
        image: "",
        favs: ""
    });

    const { username, password, email, image, favs } = profile

    const getUserDetails = () => {

        const { id } = props.match.params

        userService
            .getUserDetails(id)
            .then(response => {
                const { username, email, image } = response.data

                setProfile({ username, email, image })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUserDetails()
    }, []);

    return (
    <Container>
        <h1>Profile details</h1>
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

export default UserProfile