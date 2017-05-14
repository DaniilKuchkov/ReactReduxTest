import React, { Component } from 'react';

class Review extends Component {
    render() {
        return (
            <li>
                <h4>
                    <span className="reviewer-name">{this.props.name}</span> 
                    <span className="reviewer-date">{this.props.date}</span>
                </h4>
                <p className="reviewer-text">{this.props.reviewText}</p>
            </li>
        );
    }
}

export default Review;