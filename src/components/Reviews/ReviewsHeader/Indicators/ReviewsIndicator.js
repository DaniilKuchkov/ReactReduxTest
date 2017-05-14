import React, { Component } from 'react';

class ReviewsIndicator extends Component {
    render() {
        return (
           <span>Reviews {this.props.reviewsCount}</span>
        );
    }
}

export default ReviewsIndicator;