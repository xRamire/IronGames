import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import GameService from '../../../services/game.service'
import SearchBar from '../../layout/SearchBar/SearchBar';
import GameList from "./GameList"
import './GamePage.css'

const gameService = new GameService()

function GamePage(props) {

    const [games, setGames] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredGames, setFilteredGames] = useState([]);

    const getAllGames = () => {
        gameService
            .getAllGames()
            .then(response => {
                const games = response.data
                setGames(games)
                setFilteredGames(games)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllGames()
    }, []);

    const getSearch = (searchbarInfo) => {
        setSearch(searchbarInfo);
    };

    useEffect(() => {
        let filteredGames = games.filter((game) => game.title.toLowerCase().includes(search));
        setFilteredGames(filteredGames);
    }, [search]);

    return (
        <Container>
            <div className='div-content'>
                <h1>Game List</h1>
                <SearchBar className='search' getSearch={getSearch} />
            </div>
            <hr />
            <GameList loggedUser={props.loggedUser} getAllGames={getAllGames} games={filteredGames} {...props} />
        </Container>
    );
}

export default GamePage