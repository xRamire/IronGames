import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './UserPage.css'

const UserCard = ({ _id, username, email, role, favs, image }) => {
    return (
        <Card className="user-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> {username}</Card.Title>
                <Card.Text>{email}</Card.Text>
                <Card.Text>{role}</Card.Text>
                <Link to={`/profile/${_id}`}>
                    <Button variant="primary">Profile</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default UserCard