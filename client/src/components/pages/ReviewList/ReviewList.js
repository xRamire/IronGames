import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import NewReviewForm from '../../../NewReviewForm'
import ReviewCard from './ReviewCard'


function ReviewList(props) {

    const [modal, setModal] = useState({ showModal: false });

    const closeModal = () => {
        setModal({
            showModal: false
        })
    }

    const openModal = () => {
        setModal({
            showModal: true
        })
    }

    return (
        <div>
            <Button onClick={openModal}>Add review</Button>
            <Modal show={modal.showModal} backdrop="static" onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Review</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <NewReviewForm getAllReviews={props.getAllReviews} closeModal={closeModal} />
                </Modal.Body>
            </Modal>
            <Row>{
                props.reviews.map(elm => {
                return (
                    <Col key={elm._id}>
                        <ReviewCard  {...elm} />
                    </Col>
                    )
                })
            }</Row>
        </div>
    )

}

export default ReviewList