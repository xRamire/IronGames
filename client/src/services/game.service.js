import axios from 'axios'

class GameService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/games'
        })
    }

    getAllGames = () => this.app.get("/all")
    getOneGame = (id) => this.app.get(`/game/${id}`) // Pagina iFrame del juego
    getGameDetails = (id) => this.app.get(`/game/details/${id}`)
    createGame = (gameData) => this.app.post("/new", gameData)
    editGame = (id) => this.app.put(`/edit/${id}`)
    deleteGame = (id) => this.app.delete(`/delete/${id}`)
}

export default GameService