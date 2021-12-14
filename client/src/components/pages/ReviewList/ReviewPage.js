import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import ReviewService from '../../../services/review.service'
import SearchBar from '../../layout/SearchBar/SearchBar';
import GameDetails from '../GameDetails/GameDetailsPage';
import ReviewList from "./ReviewList"

const reviewService = new ReviewService()

function ReviewPage(props) {

    const [reviews, setReviews] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredReviews, setFilteredReviews] = useState([]);

    const getAllReviews = () => {
        reviewService
            .getAllReviews()
            .then(response => {
                const reviews = response.data
                setReviews(reviews)
                setFilteredReviews(reviews)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllReviews()
    }, []);

    const getSearch = (searchbarInfo) => {
        setSearch(searchbarInfo);
    };

    useEffect(() => {
        let filteredReviews = reviews.filter((review) => review.title.toLowerCase().includes(search));
        setFilteredReviews(filteredReviews);
    }, [search]);

    return (
        <Container>
            <h1>Review List</h1>
            <SearchBar getSearch={getSearch} />
            <ReviewList getAllReviews={getAllReviews} reviews={filteredReviews} />
            <GameDetails getAllReviews={getAllReviews} reviews={filteredReviews} />
        </Container>
    );
}

export default ReviewPage


























// class ReviewPage extends Component {
//     constructor() {
//         super()

//         this.state = {
//             reviews: []
//         }

//         this.service = new ReviewService()
//     }

//     componentDidMount() {
//         this.refreshReviews()
//     }

//     refreshReviews = () => {
//         this.service.getAllReviews()
//             .then(response => {
//                 const reviews = response.data

//                 this.setState({ reviews: reviews })
//             })
//             .catch(err => console.log(err))
//     }

//     render() {

//         return (
//             <Container>
//                    <h1>Review List</h1>

//                 <ReviewList refreshReviews={this.refreshReviews} reviews={this.state.reviews} />

//             </Container>
//         )
//     }
// }

// export default ReviewPage