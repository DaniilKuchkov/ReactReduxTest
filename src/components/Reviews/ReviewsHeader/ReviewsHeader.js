import React, { Component } from 'react';

import ShowReviews from './ShowReviews';
import Indicators from './Indicators/Indicators';
class ReviewsHeader extends Component {
    render() {
        return (
            <div className="reviews-header">
                <h3>
                    <span className="last-reviews">Последние отзывы</span>
                    <ShowReviews showAllReviews={false}/> 
<<<<<<< HEAD
                    <Indicators/>
=======
                    <Indicators likeCount={1} reviewsCount={2}/>
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
                 </h3>
            </div>
        );
    }
}

export default ReviewsHeader;