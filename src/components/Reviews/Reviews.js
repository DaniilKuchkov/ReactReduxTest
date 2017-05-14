import React, { Component } from 'react';

import ReviewsHeader from './ReviewsHeader/ReviewsHeader';
import ReviewsList from './ReviewsList/ReviewsList';
import ReviewsAdd from './ReviewsAdd';


import './style.css';

class Reviews extends Component {
    render() {
        return (
            <div className="reviews">
                <ReviewsHeader/>
                <ReviewsList/>
                <ReviewsAdd/>
            </div>
        );
    }
}

export default Reviews;