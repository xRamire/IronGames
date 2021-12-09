import React, { Component, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import GameService from './services/game.service'

const gameService = new GameService()


function NewGameForm(props) {
    
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

    const handleSubmit = (e) => {
        e.preventDefault();

        gameService
            .createGame(game)
            .then(response => {
                console.log('-----------------------------------', response)
                props.closeModal()
                props.getAllGames()
            })
            .catch(err => console.log(err))

    }

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget
        

        setGame({ ...game, [name]: value })
    }



    return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={handleInputChange} value={game.title} name="title" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handleInputChange} value={game.description} name="description" type="text" />
                </Form.Group>

                
                    {/* <Form.Control onChange={handleInputChange} value={game.genre} name="genre" type="text" /> */}
                
            <Form.Group className="mb-3" controlId="genre">
                <Form.Label>Genre</Form.Label>
                 <Form.Select aria-label="Default select example" onChange={handleInputChange} name="genre" type="text">
                    <option>Open this select menu</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Beat'em up">Beat'em up</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Multiplayer">Multiplayer</option>
                    <option value="Sports">Sports</option>
                    <option value="Terror">Terror</option>
                    <option value="Racing">Racing</option>
                    <option value="Other">Other</option>
                </Form.Select>
            </Form.Group>

                <Form.Group className="mb-3" controlId="creators">
                    <Form.Label>Creators</Form.Label>
                    <Form.Control onChange={handleInputChange} value={game.creators} name="creators" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Label>Url de la imagen</Form.Label>
                    <Form.Control onChange={handleInputChange} value={game.imageUrl} name="imageUrl" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="github">
                    <Form.Label>Github</Form.Label>
                    <Form.Control onChange={handleInputChange} value={game.github} name="github" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control onChange={handleInputChange} value={game.date} name="date" type="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="gameUrl">
                    <Form.Label>GameUrl</Form.Label>
                    <Form.Control onChange={handleInputChange} value={game.gameUrl} name="gameUrl" type="text" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )

}

export default NewGameForm


// export default class NewGameForm extends Component {
//     constructor(props) {
//         super(props)

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

//     handleSubmit = (e) => {
//         e.preventDefault();

//         this.service.createGame(this.state)
//             .then(response => {
//                 this.props.closeModal()
//                 this.props.getAllGames()
//             })
//             .catch(err => console.log(err))

//     }

//     handleInputChange = (e) => {
//         const { name, value } = e.currentTarget

//         this.setState({ [name]: value })
//     }



//     render() {
//         return (
//             <Form onSubmit={this.handleSubmit}>
//                 <Form.Group className="mb-3" controlId="title">
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control onChange={this.handleInputChange} value={this.state.title} name="title" type="text" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="description">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="genre">
//                     <Form.Label>Genre</Form.Label>
//                     <Form.Control onChange={this.handleInputChange} value={this.state.genre} name="genre" type="text" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="creators">
//                     <Form.Label>Creators</Form.Label>
//                     <Form.Control onChange={this.handleInputChange} value={this.state.creators} name="creators" type="text" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="imageUrl">
//                     <Form.Label>Url de la imagen</Form.Label>
//                     <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="imageUrl" type="text" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="github">
//                     <Form.Label>Github</Form.Label>
//                     <Form.Control onChange={this.handleInputChange} value={this.state.github} name="github" type="text" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="date">
//                     <Form.Label>Date</Form.Label>
//                     <Form.Control onChange={this.handleInputChange} value={this.state.date} name="date" type="date" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="gameUrl">
//                     <Form.Label>GameUrl</Form.Label>
//                     <Form.Control onChange={this.handleInputChange} value={this.state.gameUrl} name="gameUrl" type="text" />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         )
//     }
// }