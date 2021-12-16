import axios from 'axios'

class GameService {
    constructor() {
        this.app = axios.create({
            baseURL: 'process.env.REACT_APP_BASE_URL',
            withCredentials: true

        })
    }
    getAllGames = () => this.app.get("/all")
    getOneGame = (id) => this.app.get(`/game/${id}`) // Pagina iFrame del juego
    getGameDetails = (id) => this.app.get(`/game/details/${id}`)
    createGame = (game) => this.app.post("/new", game)
    editGame = (game) => this.app.put(`/edit/${game._id}`, game)
    deleteGame = (id) => this.app.delete(`/delete/${id}`)
}

export default GameService