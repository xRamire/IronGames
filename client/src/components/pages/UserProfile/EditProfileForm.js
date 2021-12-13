import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import UserService from '../../../services/user.service'

const userService = new UserService()

function EditProfileForm(props) {

    const [profile, setProfile] = useState({
        username: "",
        password: "",
        email: "",
        image: "",
        favs: ""
    })

    const { username, password, email, image, favs } = profile


    useEffect(() => {
        setProfile(props.profile)
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        userService
            .userEdit(profile)
            .then(response => {
                props.setProfile(response.data)
                props.closeModal()
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget

        setProfile({ ...profile, [name]: value })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={handleInputChange} value={username} name="username" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleInputChange} value={password} name="password" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="creators">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleInputChange} value={email} name="email" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Avatar</Form.Label>
                <Form.Control onChange={handleInputChange} value={image} name="image" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="github">
                <Form.Label>Favorite games</Form.Label>
                <Form.Control onChange={handleInputChange} value={favs} name="favs" type="text" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}

export default EditProfileForm