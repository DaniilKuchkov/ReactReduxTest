import React, { Component } from 'react';

class ShowReviews extends Component {
    render() {
        return (
            <span className="show-reviews">{this.props.showAllReviews ? 'Скрыть отзывы' : 'Все отзывы'}</span>
        );
    }
}

export default ShowReviews;