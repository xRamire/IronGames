import React, { Component, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import ReviewService from '../../../services/review.service'

const reviewService = new ReviewService()

function NewReviewForm(props) {
    
    const [review, setReview] = useState({
            comment: "",
            rating: "",
            game: props.game._id,
        });

    const { comment, rating, game } = review

    const handleSubmit = (e) => {
        e.preventDefault();
        reviewService
            .createReview(review)
            .then(response => {
                props.getAllReviews()
                props.closeReviewModal()
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
                    <Form.Control onChange={handleInputChange} value={comment} name="comment" type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleInputChange} name="rating" type="text">
                        <option>Rate this game</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
}

export default NewReviewForm