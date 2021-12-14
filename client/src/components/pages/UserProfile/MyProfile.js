import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import UserService from '../../../services/user.service'
import EditProfileForm from "./EditProfileForm";
import '../UserList/UserPage.css'

const userService = new UserService()

function MyProfile(props) {

    const [profile, setProfile] = useState({
        _id: "",
        username: "",
        password: "",
        email: "",
        image: "",
        favs: ""
    })

    const { username, password, email, image, favs } = profile

    const getMyProfile = () => {

        const { id } = props.match.params

        userService
            .getMyProfile(id)
            .then(response => {
                const { username, email, image, _id } = response.data

                setProfile({ username, email, image, _id })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMyProfile()
    }, []);



    const [modal, setModal] = useState({ showModal: false });

    const { showModal } = modal

    const closeModal = () => {
        setModal({
            showModal: false
        })
    }

    const openModal = () => {
        setModal({
            showModal: true
        })
    }




    return (
        <div>
            <Button onClick={openModal}>Edit</Button>
            <Modal show={showModal} backdrop="static" onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditProfileForm loggedUser={props.loggedUser} profile={profile} closeModal={closeModal} setProfile={setProfile} getMyProfile={getMyProfile} />
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

export default MyProfile