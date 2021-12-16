import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import UserService from '../../../services/user.service'
import EditProfileForm from "./EditProfileForm";
import '../UserList/UserPage.css'
import { Link } from 'react-router-dom'


const userService = new UserService()


function MyProfile(props) {

    const [profile, setProfile] = useState({
        _id: "",
        username: "",
        password: "",
        email: "",
        image: "",
        favs: []
    })
    const { id } = props.match.params


    const { username, password, email, image, favs } = profile

    const getMyProfile = () => {

        userService
            .getMyProfile(id)
            .then(response => {
                const { username, email, image, _id, favs } = response.data

                setProfile({ username, email, image, _id, favs })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMyProfile()
    }, []);



    const [editModal, setEditModal] = useState({ showEditModal: false });
    const { showEditModal } = editModal
    const closeEditModal = () => {
        setEditModal({
            showEditModal: false
        })
    }

    const openEditModal = () => {
        setEditModal({
            showEditModal: true
        })
    }

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
        .userDelete(props.loggedUser._id)
            .then(response => (null))
            .catch(err => console.log(err))
    }



    return (
        <div>
            <Button onClick={openEditModal}>Edit</Button>
            <Modal show={showEditModal} backdrop="static" onHide={closeEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditProfileForm loggedUser={props.loggedUser} profile={profile} closeModal={closeEditModal} setProfile={setProfile} getMyProfile={getMyProfile} />
                </Modal.Body>
            </Modal>

            <Button onClick={openUserDeleteModal}>Delete my Profile</Button>
            <Modal show={showUserDeleteModal} backdrop="static" onHide={closeUserDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {props.loggedUser && <Link as={Link} to='/' onClick={userDelete}  closeReviewModal={closeUserDeleteModal}>Delete my Profile</Link>}
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

export default MyProfile