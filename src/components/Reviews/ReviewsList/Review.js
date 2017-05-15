import React, { Component } from 'react';

class Review extends Component {
    render() {
        return (
            <li className="review">
                <h4>
                    <img className="triangle"src={require('../../../imgs/triangle.png')} alt="#"/>
                    <span className="reviewer-name">{this.props.name}</span> 
                    <span className="reviewer-date">{this.props.date}</span>
                </h4>
                <p className="reviewer-text">{this.props.reviewText}</p>
            </li>
        );
    }
}

export default Review;