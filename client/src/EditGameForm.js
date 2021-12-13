import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import GameService from './services/game.service'

const gameService = new GameService()

function EditGameForm(props) {

    const [game, setGame] = useState({
        _id: "",
        title: "",
        description: "",
        genre: "",
        creators: "",
        imageUrl: "",
        github: "",
        date: "",
        gameUrl: "",
        // reviews: ""  
    });


    useEffect(() => {
        setGame(props.game)
    }, []);



    const { title, description, genre, creators, imageUrl, github, date, gameUrl } = game

    const handleSubmit = (e) => {
        e.preventDefault();

        gameService
            .editGame(game)
            .then(response => {
                props.setGame(response.data)
                props.closeModal()
                // props.getGameDetails()
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
                <Form.Control onChange={handleInputChange} value={title} name="title" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={handleInputChange} value={description} name="description" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="genre">
                <Form.Label>Genre</Form.Label>
                <Form.Select aria-label="Default select example" onChange={handleInputChange} name="genre" type="text">
                    <option>Actual genre: {genre}</option>
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
                <Form.Control onChange={handleInputChange} value={creators} name="creators" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Url de la imagen</Form.Label>
                <Form.Control onChange={handleInputChange} value={imageUrl} name="imageUrl" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="github">
                <Form.Label>Github</Form.Label>
                <Form.Control onChange={handleInputChange} value={github} name="github" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control onChange={handleInputChange} value={date} name="date" type="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="gameUrl">
                <Form.Label>GameUrl</Form.Label>
                <Form.Control onChange={handleInputChange} value={gameUrl} name="gameUrl" type="text" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}

export default EditGameForm