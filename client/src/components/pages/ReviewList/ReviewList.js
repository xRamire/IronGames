import React, { Component } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import NewReviewForm from '../../../NewReviewForm'
import ReviewCard from './ReviewCard'

class ReviewList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {



        return (
            <div>
                <Button onClick={this.openModal}>Add review</Button>

                <Modal
                    show={this.state.showModal}
                    backdrop="static"
                    onHide={this.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>New Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewReviewForm refreshReviews={this.props.refreshReviews} closeModal={this.closeModal} />
                    </Modal.Body>

                </Modal>
                <Row>
                    {this.props.reviews.map(elm => {

                        return (
                            <Col key={elm._id}>
                                <ReviewCard  {...elm} />
                            </Col>
                        )
                    })
                    }
                </Row>
            </div>
        )
    }
}

export default ReviewList