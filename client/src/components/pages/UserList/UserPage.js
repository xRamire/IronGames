import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import UserService from '../../../services/user.service'
import UserList from "./UserList"

class UserPage extends Component {
    constructor() {
        super()

        this.state = {
            users: []
        }

        this.service = new UserService()
    }

    componentDidMount() {
        this.refreshUsers()
    }

    refreshUsers = () => {
        this.service.getAllUsers()
            .then(response => {
                const users = response.data

                this.setState({ users: users })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>
                <h1>User List</h1>

                <UserList refreshUsers={this.refreshUsers} users={this.state.users} />

            </Container>
        )
    }
}

export default UserPage