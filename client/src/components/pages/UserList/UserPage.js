import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap'
import UserService from '../../../services/user.service'
import UserList from "./UserList"
import SearchBar from "../../layout/SearchBar/SearchBar"
import './UserPage.css'

const userService = new UserService()

function UserPage(props) {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const getAllUsers = () => {
        userService
            .getAllUsers()
            .then(response => {
                const users = response.data
                setUsers(users)
                setFilteredUsers(users)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllUsers()
    }, []);

    const getSearch = (searchbarInfo) => {
        setSearch(searchbarInfo);
    };

    useEffect(() => {
        let filteredUsers = users.filter((user) => user.username.toLowerCase().includes(search));
        setFilteredUsers(filteredUsers);
    }, [search]);

    return (
        <Container>
            <div className='div-user-content'>
                <h1>User List</h1>
                <SearchBar getSearch={getSearch} />
            </div>
            <hr/>
            <UserList getAllUsers={getAllUsers} users={filteredUsers} loggedUser={props.loggedUser} />
        </Container>
    );
}

export default UserPage