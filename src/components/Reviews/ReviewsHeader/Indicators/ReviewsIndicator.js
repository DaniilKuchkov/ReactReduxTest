import React, { Component } from 'react';

<<<<<<< HEAD

class ReviewsIndicator extends Component {
    render() {
        return (
           <span><img src={require("../../../../imgs/comment.png")} alt="comment"/> {this.props.reviewsCount}</span>
=======
class ReviewsIndicator extends Component {
    render() {
        return (
           <span>Reviews {this.props.reviewsCount}</span>
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
        );
    }
}

export default ReviewsIndicator;