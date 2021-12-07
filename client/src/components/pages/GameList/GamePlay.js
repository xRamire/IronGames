import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameService from '../../../services/game.service'

class GamePlay extends Component {
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
        const { title, description, genre, creators, imageUrl, github, date, gameUrl } = this.state

        return (
            <Container>
                <iframe id={gameUrl}
                    title={title}
                    style={{
                        marginLeft:'-15vh',
                        width: "100%",
                        height: "100vh"
                    }}
                    src={gameUrl}>
                </iframe>
            </Container >
        )
    }
}

export default GamePlay