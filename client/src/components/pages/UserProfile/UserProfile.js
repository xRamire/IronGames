import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import UserService from '../../../services/user.service'
import { Link } from 'react-router-dom'
import './Profile.css'


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
        <Container>
                {props.loggedUser?.role === 'ADMIN' && <Button className="buttons" onClick={openUserDeleteModal}>Delete this account</Button>}
            <Modal show={showUserDeleteModal} backdrop="static" onHide={closeUserDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>This account will be deleted, are you sure?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        {props.loggedUser && <Link as={Link} to='/user-list' onClick={userDelete} closeReviewModal={closeUserDeleteModal}><Button>Confirm</Button></Link>}
                </Modal.Body>
            </Modal>
        </Container>



        <Container className='padding'>  
            <Row>
                <Col md={6} style={{ overflow: "hidden" }}>
                    <h1>Profile details</h1>
                    <hr />
                    <article>
                        <h3>{username}</h3>
                        <div>
                            {props.loggedUser?.role === 'ADMIN' && <p>{email}</p>}
                            <hr />
                            <h4>Favorite games</h4>
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
                <Col className="padding-img" md={4}>
                    <img className='profile-img' src={image} alt='avatar' ></img>
                </Col>
            </Row>
        </Container>

    </div>
)
}

export default UserProfile