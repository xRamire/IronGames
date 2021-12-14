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
    userEdit = (profile) => this.app.put(`/edit/${profile._id}`, profile)
    userDelete = (id) => this.app.delete(`/delete/${id}`)
}

export default UserService