import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ReviewCard.css'

const ReviewCard = ({ _id, comment, game, rating, owner, loggedUser, reviewDelete}) => {

    const [reviewDeleteModal, setReviewDeleteModal] = useState({ showReviewDeleteModal: false });
    const { showReviewDeleteModal } = reviewDeleteModal
    const closeReviewDeleteModal = () => {
        setReviewDeleteModal({
            showReviewDeleteModal: false
        })
    }
    const openReviewDeleteModal = () => {
        setReviewDeleteModal({
            showReviewDeleteModal: true
        })
    }


    return (
        <Card className="review-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={owner.image} />
            <Card.Body>
                <Card.Title>{owner.username}</Card.Title>
                <Card.Text><b>{rating}</b></Card.Text>
                <Card.Text>{comment}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ReviewCard