import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from './Review';

class ReviewsList extends Component {
    render() {
        const { reviewsList } = this.props;
        return (
            <div className="reviews-list">
                <ul>
                    {
                        reviewsList.map((item)=><Review 
                                                        key={item.date}
                                                        name={item.name} 
                                                        date={item.date} 
                                                        reviewText={item.reviewText}
                                                />)
                    }
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        reviewsList: state.reviews.reviewsList
    }
}
export default connect(mapStateToProps)(ReviewsList);