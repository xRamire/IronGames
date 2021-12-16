import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import EditGameForm from "../GameList/EditGameForm";
import GameService from '../../../services/game.service'
import './GameDetailsPage.css'
import NewReviewForm from "../ReviewList/NewReviewForm";
import { useParams } from "react-router-dom";
import ReviewService from "../../../services/review.service";
import ReviewList from "../ReviewList/ReviewList";
import { Link } from 'react-router-dom'
import UserService from "../../../services/user.service";


const gameService = new GameService()
const reviewService = new ReviewService()
const userService = new UserService()

function GameDetails(props) {

    const [game, setGame] = useState({
        _id: "",
        title: "",
        description: "",
        genre: "",
        creators: "",
        imageUrl: "",
        github: "",
        date: "",
        gameUrl: "",
        reviews: ""
    });

    const { title, description, genre, creators, imageUrl, github, date, gameUrl } = game

    const [reviews, setReviews] = useState([]);
    const { id } = props.match.params

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


    const [reviewModal, setReviewModal] = useState({ showReviewModal: false });
    const { showReviewModal } = reviewModal
    const closeReviewModal = () => {
        setReviewModal({
            showReviewModal: false
        })
    }
    const openReviewModal = () => {
        setReviewModal({
            showReviewModal: true
        })
    }


    const [gameDeleteModal, setGameDeleteModal] = useState({ showGameDeleteModal: false });
    const { showGameDeleteModal } = gameDeleteModal
    const closeGameDeleteModal = () => {
        setGameDeleteModal({
            showGameDeleteModal: false
        })
    }
    const openGameDeleteModal = () => {
        setGameDeleteModal({
            showGameDeleteModal: true
        })
    }


    const getGameDetails = () => {
        gameService
            .getGameDetails(id)
            .then(response => {
                console.log(response.data)
                const { _id, title, description, genre, creators, imageUrl, github, date, gameUrl } = response.data

                setGame({ _id, title, description, genre, creators, imageUrl, github, date, gameUrl })
            })
            .catch(err => console.log(err))
    }

    const getAllReviews = () => {
        reviewService
            .getAllReviews(id)
            .then(response => {
                const reviews = response.data
                setReviews(reviews)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getGameDetails()
        getAllReviews()
    }, []);


    const gameDelete = () => {
        gameService.deleteGame(id)
            .then(response => (null))
            .catch(err => console.log(err))
    }

    const reviewDelete = () => {
        
        reviewService
            .deleteReview(id)
            .then(response => (null))
            .catch(err => console.log(err))
    }

    const gameFav = () => {

        if (!props.loggedUser.favs.includes(game._id)) {
            userService
                .favGame(id)
                .then(response => {
                    const user = response.data
                    props.storeUser(user)
                })
                .catch(err => console.log(err))
        }
    }

    const gameUnfav = () => {

        if (props.loggedUser.favs.includes(game._id)) {
            userService
                .unfavGame(id)
                .then(response => {
                    const user = response.data
                    props.storeUser(user)
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <Container>
                {props.loggedUser?.role === 'ADMIN' && <Button className="buttons" onClick={openEditModal}>Edit</Button>}
                <Modal show={showEditModal} backdrop="static" onHide={closeEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Game</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <EditGameForm game={game} closeModal={closeEditModal} setGame={setGame} />
                    </Modal.Body>
                </Modal>

                {props.loggedUser && <Button className="buttons" onClick={openReviewModal}>Add Review</Button>}
                <Modal show={showReviewModal} backdrop="static" onHide={closeReviewModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Review</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <NewReviewForm game={game} closeReviewModal={closeReviewModal} getAllReviews={getAllReviews} />
                    </Modal.Body>
                </Modal>

                {props.loggedUser?.role === 'ADMIN' && <Button className="buttons" onClick={openGameDeleteModal}>Delete Game</Button>}
                <Modal show={showGameDeleteModal} backdrop="static" onHide={closeGameDeleteModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>This game will be deleted, are you sure?</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {props.loggedUser?.role === 'ADMIN' && <Link to='/game-list' onClick={gameDelete} closeReviewModal={closeGameDeleteModal}> <Button>Confirm</Button></Link>}
                    </Modal.Body>
                </Modal>

                {props.loggedUser?.favs.includes(game._id) ? <Button className="buttons" onClick={gameUnfav}>Delete from Favorites</Button> : <Button className="buttons" onClick={gameFav}>Add to Favorites</Button>}
            </Container>


            <Container className='padding'>
                <Row>
                    <Col md={6} style={{ overflow: "hidden" }}>
                        <article>
                            <h2>{title}</h2>
                            <div>
                                <p>{description}</p>
                                <hr />
                                <p><b>Genre:</b> {genre}</p>
                                <p><b>Made by:</b> {creators}</p>
                                <p><b>Published on:</b> {new Date(date).toDateString()}</p>
                                <p><a className="github" href={github}><b>Github</b></a></p>
                                <Link to={`/game/${game._id}`}><Button variant="primary">Play Now!</Button></Link>              
                            </div>
                        </article>
                    </Col>
                    <Col className="padding-img" md={4}>
                        <img className='game-details-img' src={imageUrl} alt={title} ></img>
                    </Col>
                </Row>

            </Container>
            <Container className="reviews">
                <h2>Reviews</h2>
                <hr />
                <ReviewList reviews={reviews} reviewDelete={reviewDelete} loggedUser={props.loggedUser} />
            </Container>




        </div>

    )
}

export default GameDetails