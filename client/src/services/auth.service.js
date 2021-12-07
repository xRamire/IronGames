import axios from 'axios'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'

class AuthService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/',
            withCredentials: true
        })
    }

    signup = (username, password, email) => this.app.post("/signup", { username, password, email })
    login = (username, password) => this.app.post("/login", { username, password })
    logout = () => this.app.get("/logout")
    isloggedin = () => this.app.get("/isloggedin")

    // TODO HACER SERVICE DE USERS
    userEdit = (id ,password, email) => this.app.get(`/edit/${id}`, {password, email})
    userDelete = (id) => this.app.get(`/delete/${id}`)
}

export default AuthService