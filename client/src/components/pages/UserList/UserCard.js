import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './UserCard.css'

const UserCard = ({ _id, username, email, role, favs, image, loggedUser }) => {
    return (
        <Card className="user-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> {username}</Card.Title>

                {loggedUser?.role === 'ADMIN' && <Card.Text>{email}</Card.Text>}

                <Card.Text>{role}</Card.Text>
                <div className='user-card-button2'>
                    <Link to={`/profile/${_id}`}>
                        <Button variant="primary">Profile</Button>
                    </Link>
                </div>

            </Card.Body>
        </Card>
    )
}

export default UserCard