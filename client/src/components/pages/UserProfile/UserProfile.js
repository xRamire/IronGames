import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import UserService from '../../../services/user.service'
import EditProfileForm from "./EditProfileForm";
import { Link } from 'react-router-dom'


const userService = new UserService()

function UserProfile(props) {
    
    const [profile, setProfile] = useState({
        username: "",
        password: "",
        email: "",
        image: "",
        favs: []
    });

    const { username, password, email, image, favs } = profile

    const { id } = props.match.params


    const getUserDetails = () => {


        userService
            .getUserDetails(id)
            .then(response => {
                const { username, email, image, favs } = response.data

                setProfile({ username, email, image, favs })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUserDetails()
    }, []);


    const [userDeleteModal, setUserDeleteModal] = useState({ showUserDeleteModal: false });
    const { showUserDeleteModal } = userDeleteModal
    const closeUserDeleteModal = () => {
        setUserDeleteModal({
            showUserDeleteModal: false
        })
    }
    const openUserDeleteModal = () => {
        setUserDeleteModal({
            showUserDeleteModal: true
        })
    }

    const userDelete = () => {

        userService
            .userDelete(id)
            .then(response => props.storeUser(null))
            .catch(err => console.log(err))
    }

    return (
        
    <div>

        <Button onClick={openUserDeleteModal}>Delete my Profile</Button>
        <Modal show={showUserDeleteModal} backdrop="static" onHide={closeUserDeleteModal}>
            <Modal.Header closeButton>
                <Modal.Title>This user will be deleted, are you sure?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {props.loggedUser && <Link as={Link} to='/' onClick={userDelete} closeReviewModal={closeUserDeleteModal}>Delete Profile</Link>}
            </Modal.Body>
        </Modal>


        <Container className='padding'>
            <h1>Profile details</h1>
            <Row className="justify-content-around">
                <Col md={6} style={{ overflow: "hidden" }}>
                    <article>
                        <h2>{username}</h2>
                        <div>
                            <p>{email}</p>
                            <hr />
                            <br />
                            <p>{favs.map(elm => {
                                    
                                    return (
                                        <ul>
                                            <li>{elm.title}</li>
                                        </ul>
                                    )
                                })}</p>
                        </div>
                    </article>
                </Col>
                <Col md={4}>
                    <img className='details-img' src={image} alt='avatar' ></img>
                </Col>
            </Row>
        </Container >

    </div>
)
}

export default UserProfile