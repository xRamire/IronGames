import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import ReviewService from '../../../services/review.service'
import ReviewList from "./ReviewList"

class ReviewPage extends Component {
    constructor() {
        super()

        this.state = {
            reviews: []
        }

        this.service = new ReviewService()
    }

    componentDidMount() {
        this.refreshReviews()
    }

    refreshReviews = () => {
        this.service.getAllReviews()
            .then(response => {
                const reviews = response.data

                this.setState({ reviews: reviews })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>
                   <h1>Review List</h1>

                <ReviewList refreshReviews={this.refreshReviews} reviews={this.state.reviews} />

            </Container>
        )
    }
}

export default ReviewPage