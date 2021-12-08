import React, { Component, useState, useEffect } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import UserCard from './UserCard'


function UserList(props) {
    

    return (
            <div>
                <Row>
                    {props.users.map(elm => {

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

export default UserList





// class UserList extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             showModal: false
//         }
//     }

//     render() {



//         return (
//             <div>
//                 <Row>
//                     {this.props.users.map(elm => {

//                         return (
//                             <Col key={elm._id}>
//                                 <UserCard  {...elm} />
//                             </Col>
//                         )
//                     })
//                     }
//                 </Row>
//             </div>
//         )
//     }
// }

// export default UserList