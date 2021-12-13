import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import GameService from '../../../services/game.service'

const gameService = new GameService()

function GamePlay(props) {

    const [game, setGame] = useState({
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

    useEffect(() => {
        
        const { id } = props.match.params

        gameService
            .getOneGame(id)
            .then(response => {
                const { title, description, genre, creators, imageUrl, github, date, gameUrl } = response.data

                setGame({ title, description, genre, creators, imageUrl, github, date, gameUrl })
            })
            .catch(err => console.log(err))
    }, []);
    

    return (
        <Container>
            <iframe id={game.gameUrl} title={game.title} style={{marginLeft:'-15vh', width: "100%", height: "100vh"}} src={game.gameUrl}></iframe>
        </Container >
    )
}

export default GamePlay