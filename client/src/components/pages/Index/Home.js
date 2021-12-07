import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <h1>Bievenid@ a IronHack Games!</h1>
            <p>Una MERN Stack sobre juegos</p>

            <hr></hr>

            <Link to="/game-list">
                <Button variant="dark" size="lg">Ver juegos</Button>
            </Link>
        </Container>
    )
}

export default Home