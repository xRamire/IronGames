import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameService from '../../../services/game.service'

class GameDetails extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
            description: "",
            genre: "",
            creators: "",
            imageUrl: "",
            github: "",
            date: "",
            gameUrl: ""
            // reviews: ""
        }

        this.service = new GameService()
    }

    componentDidMount() {
        const id = this.props.match.params.id

        this.service.getOneGame(id)
            .then(response => {
                const { title, description, genre, creators, imageUrl, github, date, gameUrl } = response.data

                this.setState({ title, description, genre, creators, imageUrl, github, date, gameUrl })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { title, description, genre, creators, imageUrl, github, date, gameUrl} = this.state

        return (
            <Container>
                <h1>Detalles</h1>

                <Row className="justify-content-around">
                    <Col md={6} style={{ overflow: "hidden" }}>
                        <article>
                            <h2>{title}</h2>
                            <div>
                                <p>{description}</p>
                                <hr />
                                <br />
                                <p>Genre: {genre}</p>
                                <p>Creators: {creators}</p>
                                <p>Github: {github}</p>
                                <p>Date: {date}</p>
                                <p>GameUrl: {gameUrl}</p>
                            </div>
                        </article>
                    </Col>
                    <Col md={4}>
                        <img src={imageUrl} alt={title} ></img>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default GameDetails