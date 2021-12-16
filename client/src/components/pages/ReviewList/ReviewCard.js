import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ReviewPage.css'

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
        <Card className="game-card" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{owner.username}</Card.Title>
                <Card.Text><img className='review-img' src={owner.image} alt='avatar' ></img></Card.Text>
                <Card.Text>{rating}</Card.Text>
                <Card.Text>{comment}</Card.Text>

                {loggedUser?.role === 'ADMIN' && <Button onClick={openReviewDeleteModal}>Delete Review</Button>}
                <Modal show={showReviewDeleteModal} backdrop="static" onHide={closeReviewDeleteModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>This will delete the review, are you sure?</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {loggedUser?.role === 'ADMIN' && <Button onClick={reviewDelete} closeReviewModal={closeReviewDeleteModal}>Delete Review</Button>}
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    )
}

export default ReviewCard