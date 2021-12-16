import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './GameCard.css'

const GameCard = ({ _id, title, description, genre, creators, imageUrl, github, date, gameUrl, reviews }) => {
    return (
        <Card className="game-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title> {title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {genre}
                </Card.Text>
                <Card.Text>
                    {creators}
                </Card.Text>
            
                <div className='card-button'>
                    <Link to={`/game/${_id}`}>
                        <Button variant="primary">Lets Play!</Button>
                    </Link>

                    <Link to={`/game/details/${_id}`}>
                        <Button variant="secondary">Details</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default GameCard