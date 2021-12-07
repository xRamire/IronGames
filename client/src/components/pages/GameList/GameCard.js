import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './GamePage.css'

const GameCard = ({ _id, title, description, genre, creators, imageUrl, github, date, gameUrl }) => {
    return (
        <Card className="game-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title> {title}</Card.Title>
                <Card.Text>
                    {description}.
                </Card.Text>
                <Card.Text>
                    {genre}.
                </Card.Text>
                <Card.Text>
                    {creators}.
                </Card.Text>

                <Link to={`/game/${_id}`}>
                    <Button variant="primary">Jugar</Button>
                </Link>

                <Link to={`/game/details/${_id}`}>
                    <Button variant="primary">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default GameCard