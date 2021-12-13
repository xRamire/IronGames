import axios from 'axios'

class ReviewService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/reviews',
            withCredentials: true

        })
    }
    getAllReviews = () => this.app.get("/all")
    createReview = (reviewData) => this.app.post("/new", reviewData)
    editReview = (id) => this.app.put(`/edit/${id}`)
    deleteReview = (id) => this.app.delete(`/delete/${id}`)
}

export default ReviewService