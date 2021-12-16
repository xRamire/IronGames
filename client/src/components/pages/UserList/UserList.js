import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserCard from './UserCard'

function UserList({users, loggedUser}) {
    
    return (
        <div>
            <Row>
                {users.map(elm => <Col key={elm._id}><UserCard loggedUser={loggedUser} {...elm} /></Col>)}
            </Row>
        </div>
    )
}

export default UserList