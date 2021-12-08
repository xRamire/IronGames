import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameService from '../../../services/game.service'
import '../GameList/GamePage.css'

const gameService = new GameService()

function GameDetails(props) {


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
        const id = props.match.params.id

        gameService
            .getGameDetails(id)
            .then(response => {
                const { title, description, genre, creators, imageUrl, github, date, gameUrl } = response.data

                setGame({ title, description, genre, creators, imageUrl, github, date, gameUrl })
            })
            .catch(err => console.log(err))
    }, []);




    return (
        <Container className='padding'>
            <Row className="justify-content-around">
                <Col md={6} style={{ overflow: "hidden" }}>
                    <article>
                        <h2>{game.title}</h2>
                        <div>
                            <p>{game.description}</p>
                            <hr />
                            <br />
                            <p>Genre: {game.genre}</p>
                            <p>Made by: {game.creators}</p>
                            <p><a href={game.github}>Repositorio Github</a></p>
                            <p>Date: {game.date}</p>
                            <p>GameUrl: {game.gameUrl}</p>
                        </div>
                    </article>
                </Col>
                <Col md={4}>
                    <img className='details-img' src={game.imageUrl} alt={game.title} ></img>
                </Col>
            </Row>
        </Container >
    )

}

export default GameDetails





// class GameDetails extends Component {
//     constructor() {
//         super()

//         this.state = {
//             title: "",
//             description: "",
//             genre: "",
//             creators: "",
//             imageUrl: "",
//             github: "",
//             date: "",
//             gameUrl: ""
//             // reviews: ""
//         }

//         this.service = new GameService()
//     }

//     componentDidMount() {
//         const id = this.props.match.params.id

//         this.service.getGameDetails(id)
//             .then(response => {
//                 const { title, description, genre, creators, imageUrl, github, date, gameUrl } = response.data

//                 this.setState({ title, description, genre, creators, imageUrl, github, date, gameUrl })
//             })
//             .catch(err => console.log(err))
//     }

//     render() {
//         const { title, description, genre, creators, imageUrl, github, date, gameUrl} = this.state

//         return (
//             <Container className='padding'>
//                 <Row className="justify-content-around">
//                     <Col md={6} style={{ overflow: "hidden" }}>
//                         <article>
//                             <h2>{title}</h2>
//                             <div>
//                                 <p>{description}</p>
//                                 <hr />
//                                 <br />
//                                 <p>Genre: {genre}</p>
//                                 <p>Made by: {creators}</p>
//                                 <p><a href="{github}">Repositorio Github</a></p>
//                                 <p>Date: {date}</p>
//                                 <p>GameUrl: {gameUrl}</p>
//                             </div>
//                         </article>
//                     </Col>
//                     <Col md={4}>
//                         <img className='details-img' src={imageUrl} alt={title} ></img>
//                     </Col>
//                 </Row>
//             </Container >
//         )
//     }
// }

// export default GameDetails