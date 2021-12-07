import React, { Component } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import UserCard from './UserCard'

class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    render() {



        return (
            <div>
                <Row>
                    {this.props.users.map(elm => {

                        return (
                            <Col key={elm._id}>
                                <UserCard  {...elm} />
                            </Col>
                        )
                    })
                    }
                </Row>
            </div>
        )
    }
}

export default UserList