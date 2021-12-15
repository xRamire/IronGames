import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import ReviewCard from './ReviewCard'


function ReviewList(props) {


    return (
        <Row>{
            props.reviews.map(elm => {
                return (
                    <Col key={elm._id}>
                        <ReviewCard  {...elm} />
                    </Col>
                )
            })
        }</Row>
    )

}

export default ReviewList