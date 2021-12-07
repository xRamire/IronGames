import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import GameService from '../../../services/game.service'
import GameList from "./GameList"

class GamePage extends Component {
    constructor() {
        super()

        this.state = {
            games: []
        }

        this.service = new GameService()
    }

    componentDidMount() {
        this.refreshGames()
    }

    refreshGames = () => {
        this.service.getAllGames()
            .then(response => {
                const games = response.data

                this.setState({ games: games })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>
                <h1>Game List</h1>

                <GameList refreshGames={this.refreshGames} games={this.state.games} />

            </Container>
        )
    }
}

export default GamePage