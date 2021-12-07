import React, { Component } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import NewGameForm from '../../../NewGameForm'
import GameCard from './GameCard'

class GameList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {



        return (
            <div>
                <Button onClick={this.openModal}>Add game</Button>

                <Modal
                    show={this.state.showModal}
                    backdrop="static"
                    onHide={this.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>New Game</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewGameForm refreshGames={this.props.refreshGames} closeModal={this.closeModal} />
                    </Modal.Body>

                </Modal>
                <Row>
                    {this.props.games.map(elm => {

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
}

export default GameList