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
                    <Indicators/>
                 </h3>
            </div>
        );
    }
}

export default ReviewsHeader;