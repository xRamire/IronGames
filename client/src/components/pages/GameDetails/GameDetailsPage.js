import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Link } from "react-bootstrap";
import EditGameForm from "../GameList/EditGameForm";
import GameService from '../../../services/game.service'
import '../GameList/GamePage.css'
import NewReviewForm from "../ReviewList/NewReviewForm";
import { useParams } from "react-router-dom";
import ReviewService from "../../../services/review.service";
import ReviewList from "../ReviewList/ReviewList";

const gameService = new GameService()
const reviewService = new ReviewService()

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


    const [modal, setModal] = useState({ showModal: false });

    const [reviewModal, setReviewModal] = useState({ showReviewModal: false });

    const { showReviewModal } = reviewModal


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
    

    // const gameDelete = () => {
    //     gameService.deleteGame(id)
    //         .then(response => (null))
    //         .catch(err => console.log(err))
    // }


    return (
        <div>

            {props.loggedUser?.role === 'ADMIN' && <Button onClick={openModal}>Edit</Button>}
            <Modal show={showModal} backdrop="static" onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Game</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditGameForm game={game} closeModal={closeModal} setGame={setGame} />
                </Modal.Body>
            </Modal>

            {props.loggedUser && <Button onClick={openReviewModal}>Add Review</Button>}
            <Modal show={showReviewModal} backdrop="static" onHide={closeReviewModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Review</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <NewReviewForm game={game} closeReviewModal={closeReviewModal} />
                </Modal.Body>
            </Modal>


            {/* {props.loggedUser?.role === 'ADMIN' && <Link as={Link} to='/' onClick={}>Logout</Link>} */}

            <Container className='padding'>
                <Row>
                    <Col md={6} style={{ overflow: "hidden" }}>
                        <article>
                            <h2>{title}</h2>
                            <div>
                                <p>{description}</p>
                                <hr />
                                <br />
                                <p>Genre: {genre}</p>
                                <p>Made by: {creators}</p>
                                <p><a href={github}>Repositorio Github</a></p>
                                <p>Date: {date}</p>
                                <p>GameUrl: {gameUrl}</p>
                            </div>
                        </article>
                    </Col>
                    <Col md={4}>
                        <img className='details-img' src={imageUrl} alt={title} ></img>
                    </Col>
                </Row>

                <ReviewList reviews={reviews}/>
            </Container >




        </div>

    )
}

export default GameDetails