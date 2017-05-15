import React, { Component } from 'react';


class ReviewsIndicator extends Component {
    render() {
        return (
           <span><img src={require("../../../../imgs/comment.png")} alt="comment"/> {this.props.reviewsCount}</span>
        );
    }
}

export default ReviewsIndicator;