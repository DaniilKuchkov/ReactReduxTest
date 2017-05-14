import React, { Component } from 'react';

class Review extends Component {
    render() {
        return (
<<<<<<< HEAD
            <li className="review">
                <h4>
                    <img className="triangle"src={require('../../../imgs/triangle.png')} alt="#"/>
=======
            <li>
                <h4>
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
                    <span className="reviewer-name">{this.props.name}</span> 
                    <span className="reviewer-date">{this.props.date}</span>
                </h4>
                <p className="reviewer-text">{this.props.reviewText}</p>
            </li>
        );
    }
}

export default Review;