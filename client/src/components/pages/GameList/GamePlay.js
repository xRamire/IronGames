import React, { useState, useEffect, useRef } from "react";
import GameService from '../../../services/game.service'
import "./GamePlay.css"

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
        gameUrl: "",
        reviews: ""
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
        <div className="game-wrap">
            <iframe className="game-frame" title={game.title} src={game.gameUrl}></iframe>
        </div>
    )
}

export default GamePlay

