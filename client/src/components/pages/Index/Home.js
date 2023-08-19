import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ironlogo from '../../../assets/images/ironhack-1.svg'
import './Home.css'

const Home = () => {
    return (
        <>
            <section className="landing home-bg">

                <Container>
                    <Row>
                        <div className="main-background">
                            {/* <img className="main-logo" src={ironlogo} alt="logo" ></img> */}

                            <div className="main-text">
                                <h1>Welcome to IronGames</h1>
                                <p>Discover what ironhackers made in the third week of IronHack Web-Dev course!</p>
                            </div>
                        </div>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default Home