import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from './Review';


class ReviewsList extends Component {
    render() {
        const { reviewsList } = this.props;
        localStorage.setItem('reviewsList',JSON.stringify(reviewsList));
        return (
            <div className="reviews-list">
                <ul>
                    {
                        reviewsList.map((item,index)=><Review 
                                                        key={index}
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