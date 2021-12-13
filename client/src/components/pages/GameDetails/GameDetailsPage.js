import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import EditGameForm from "../GameList/EditGameForm";
import GameService from '../../../services/game.service'
import '../GameList/GamePage.css'

const gameService = new GameService()

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
        gameUrl: ""
        // reviews: ""
    });

    const { title, description, genre, creators, imageUrl, github, date, gameUrl } = game


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



    useEffect(() => {
        const { id } = props.match.params

        gameService
            .getGameDetails(id)
            .then(response => {
                console.log(response.data)
                const { _id, title, description, genre, creators, imageUrl, github, date, gameUrl } = response.data

                setGame({ _id, title, description, genre, creators, imageUrl, github, date, gameUrl })
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>

            <Button onClick={openModal}>Edit</Button>
            <Modal show={showModal} backdrop="static" onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Game</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditGameForm game={game} closeModal={closeModal} setGame={setGame} />
                </Modal.Body>
            </Modal>

            <Container className='padding'>
                <Row className="justify-content-around">
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
            </Container >
        </div>

    )
}

export default GameDetails