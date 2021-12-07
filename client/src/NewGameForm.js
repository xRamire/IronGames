import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import GameService from './services/game.service'

export default class NewGameForm extends Component {
    constructor(props) {
        super(props)

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

    handleSubmit = (e) => {
        e.preventDefault();

        this.service.createGame(this.state)
            .then(response => {
                this.props.closeModal()
                this.props.refreshGames()
            })
            .catch(err => console.log(err))

    }

    handleInputChange = (e) => {
        const { name, value } = e.currentTarget

        this.setState({ [name]: value })
    }



    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.title} name="title" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.genre} name="genre" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="creators">
                    <Form.Label>Creators</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.creators} name="creators" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Label>Url de la imagen</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="imageUrl" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="github">
                    <Form.Label>Github</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.github} name="github" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.date} name="date" type="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="gameUrl">
                    <Form.Label>GameUrl</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.gameUrl} name="gameUrl" type="text" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}