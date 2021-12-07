import axios from 'axios'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'

class UserService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/user',
            withCredentials: true
        })
    }
    
    getAllUsers = () => this.app.get("/all")
    getUserDetails = (id) => this.app.get(`/profile/${id}`)
    userEdit = (id, password, email) => this.app.get(`/edit/${id}`, { password, email })
    userDelete = (id) => this.app.get(`/delete/${id}`)
}

export default UserService