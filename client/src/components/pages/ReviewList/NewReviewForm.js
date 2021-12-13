import React, { Component, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import ReviewService from '../../../services/review.service'

const reviewService = new ReviewService()

function NewReviewForm(props) {
    
    const [review, setReview] = useState({
            comment: "",
            rating: "",
            game: ""
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        reviewService
            .createReview(review)
            .then(response => {
                props.closeModal()
                props.refreshReviews()
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget

        setReview({...review, [name]: value })
    }

    return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control onChange={handleInputChange} value={review.comment} name="comment" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control onChange={handleInputChange} value={review.rating} name="rating" type="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="game">
                    <Form.Label>Game</Form.Label>
                    <Form.Control onChange={handleInputChange} value={review.genre} name="game" type="text" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
}

export default NewReviewForm