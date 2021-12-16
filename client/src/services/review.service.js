import axios from 'axios'

class ReviewService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/reviews`,
            withCredentials: true

        })
    }
    getAllReviews = (id) => this.app.get(`/all/${id}`)
    createReview = (reviewData) => this.app.post("/new", reviewData)
    editReview = (review) => this.app.put(`/edit/${review._id}`, review)
    deleteReview = (id) => this.app.delete(`/delete/${id}`)
}

export default ReviewService