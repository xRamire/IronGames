import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ReviewPage.css'

const ReviewCard = ({ _id, comment, game, rating, owner  }) => {
    return (
        <Card className="game-card" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{owner.username}</Card.Title>
                <Card.Text>{rating}</Card.Text>
                <Card.Text>{comment}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ReviewCard