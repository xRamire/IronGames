import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import NewGameForm from './NewGameForm';
import GameCard from './GameCard'

function GameList(props) {

    const [modal, setModal] = useState({ showModal: false });

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
            {props.loggedUser?.role === 'ADMIN' && <Button onClick={openModal}>Add game</Button>}
            <Modal show={modal.showModal} backdrop="static" onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Game</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <NewGameForm getAllGames={props.getAllGames} closeModal={closeModal} />
                </Modal.Body>
            </Modal>
            <Row>
                {props.games.map(elm => {
                    return (
                        <Col key={elm._id}>
                            <GameCard  {...elm} />
                        </Col>
                    )
                })
                }
            </Row>
        </div>
    )
}

export default GameList