import React, { useState, useEffect } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import NewGameForm from '../../../NewGameForm'
import GameCard from './GameCard'




function GameList(props) {

    const [modal, setModal] = useState({ showModal: false });




    const closeModal = () => {
        setModal({
            showModal: false
        })
    }

    // useEffect(() => {
    //     closeModal()
    // }, []);



    const openModal = () => {
        setModal({
            showModal: true
        })
    }

    // useEffect(() => {
    //     openModal()
    // }, []);


    return (
        <div>
            <Button onClick={openModal}>Add game</Button>

            <Modal
                show={modal.showModal}
                backdrop="static"
                onHide={closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Game</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewGameForm getAllGames={props.getAllGames} closeModal={closeModal} />
                </Modal.Body>

            </Modal>
            <Row>
                {props.games.map(elm => {

                    return (
                        <Col key={elm._id}>
                            <GameCard  {...elm} />
                        </Col>
                    )
                })
                }
            </Row>
        </div>
    )

}

export default GameList









// class GameList extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             showModal: false
//         }
//     }

//     openModal = () => {
//         this.setState({
//             showModal: true
//         })
//     }

//     closeModal = () => {
//         this.setState({
//             showModal: false
//         })
//     }

//     render() {



//         return (
//             <div>
//                 <Button onClick={this.openModal}>Add game</Button>

//                 <Modal
//                     show={this.state.showModal}
//                     backdrop="static"
//                     onHide={this.closeModal}
//                 >
//                     <Modal.Header closeButton>
//                         <Modal.Title>New Game</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <NewGameForm getAllGames={this.props.getAllGames} closeModal={this.closeModal} />
//                     </Modal.Body>

//                 </Modal>
//                 <Row>
//                     {this.props.games.map(elm => {

//                         return (
//                             <Col key={elm._id}>
//                                 <GameCard  {...elm} />
//                             </Col>
//                         )
//                     })
//                     }
//                 </Row>
//             </div>
//         )
//     }
// }

// export default GameList