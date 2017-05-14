import React, { Component } from 'react';

import LikeIndicator from './LikeIndicator';
import ReviewsIndicator from './ReviewsIndicator';

class Indicators extends Component {
    render() {
        let {likeCount,reviewsCount} = this.props;
        return (
            <span className="indicators">
                <LikeIndicator likeCount={likeCount}/>
                <ReviewsIndicator reviewsCount={reviewsCount}/>
            </span>
        );
    }
}

export default Indicators;