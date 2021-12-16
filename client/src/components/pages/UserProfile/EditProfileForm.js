import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import UserService from '../../../services/user.service'
import UploadService from '../../../services/upload.service'
import Spinner from '../../shared/Spinner'

const userService = new UserService()
const uploadService = new UploadService()

function EditProfileForm(props) {

    const [profile, setProfile] = useState({
        _id: "",
        username: "",
        password: "",
        email: "",
        image: "",
        favs: "",
    })

    const { username, password, email, image, favs } = profile

    const [loading, setLoading] = useState({ loading: false });



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

    const handleUploadChange = (e) => {
        setLoading({ loading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(response => {
                setProfile({ ...profile, image: response.data.cloudinary_url })
                setLoading({ loading: false })
            })
            .catch(err => console.log(err))

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleInputChange} value={password} name="password" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleInputChange} value={email} name="email" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image archive</Form.Label>
                <Form.Control onChange={handleUploadChange} name="imageData" type="file" />
            </Form.Group>
            {loading.loading && <Spinner shape="circle" />}

            <Button disabled={loading.loading} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}

export default EditProfileForm