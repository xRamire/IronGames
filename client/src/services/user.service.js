import axios from 'axios'

class UserService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/user',
            withCredentials: true
        })
    }
    getAllUsers = () => this.app.get("/all")
    getUserDetails = (id) => this.app.get(`/profile/${id}`)
    getMyProfile = (id) => this.app.get(`/my-profile`)
    userEdit = (user) => this.app.get(`/edit/${user._id}`, user)
    userDelete = (id) => this.app.get(`/delete/${id}`)
}

export default UserService