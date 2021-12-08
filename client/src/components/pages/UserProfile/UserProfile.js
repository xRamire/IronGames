import React, { Component, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserService from '../../../services/user.service'

const userService = new UserService()


function UserProfile(props) {
    
    const [profile, setProfile] = useState({
            username: "",
            password: "",
            email: "",
            image: "",
            favs: ""
        });

    const getUserDetails = () => {

        const id = props.match.params.id

        userService
            .getUserDetails(id)
            .then(response => {
                const { username, email, image } = response.data

                setProfile({ username, email, image })
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUserDetails()
    }, []);


            return (
            <Container>
                <h1>Profile details</h1>

                <Row className="justify-content-around">
                    <Col md={6} style={{ overflow: "hidden" }}>
                        <article>
                            <h2>{profile.username}</h2>
                            <div>
                                <p>{profile.email}</p>
                                <hr />
                                <br />
                            </div>
                        </article>
                    </Col>
                    <Col md={4}>
                        <img src={profile.image} alt='avatar' ></img>
                    </Col>
                </Row>
            </Container >
        )


}

export default UserProfile


// class UserProfile extends Component {
//     constructor() {
//         super()

//         this.state = {
//             username: "",
//             password: "",
//             email: "",
//             image: "",
//             favs: ""
//         }

//         this.service = new UserService()
//     }

//     componentDidMount() {
        
//         const id = this.props.match.params.id

//         this.service.getUserDetails(id)
//             .then(response => {
//                 const { username, email, image } = response.data

//                 this.setState({ username, email, image })
//             })
//             .catch(err => console.log(err))
//     }

//     render() {
//         const { username, email, image } = this.state

//         return (
//             <Container>
//                 <h1>Detalles</h1>

//                 <Row className="justify-content-around">
//                     <Col md={6} style={{ overflow: "hidden" }}>
//                         <article>
//                             <h2>{username}</h2>
//                             <div>
//                                 <p>{email}</p>
//                                 <hr />
//                                 <br />
//                             </div>
//                         </article>
//                     </Col>
//                     <Col md={4}>
//                         <img src={image} alt='avatar' ></img>
//                     </Col>
//                 </Row>
//             </Container >
//         )
//     }
// }

// export default UserProfile