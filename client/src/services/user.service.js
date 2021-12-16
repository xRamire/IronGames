import axios from 'axios'

class UserService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/user`,
            withCredentials: true
        })
    }
    getAllUsers = () => this.app.get("/all")
    getUserDetails = (id) => this.app.get(`/profile/${id}`)
    getMyProfile = (id) => this.app.get(`/my-profile`)
    userEdit = (profile) => this.app.put(`/edit/${profile._id}`, profile)
    userDelete = (id) => this.app.delete(`/delete/${id}`)
    favGame = (id) => this.app.put(`/favs/fav/${id}`)
    unfavGame = (id) => this.app.put(`/favs/unfav/${id}`)

}

export default UserService