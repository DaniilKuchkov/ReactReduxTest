import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from './Review';

<<<<<<< HEAD

class ReviewsList extends Component {
    render() {
        const { reviewsList } = this.props;
        localStorage.setItem('reviewsList',JSON.stringify(reviewsList));
=======
class ReviewsList extends Component {
    render() {
        const { reviewsList } = this.props;
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
        return (
            <div className="reviews-list">
                <ul>
                    {
<<<<<<< HEAD
                        reviewsList.map((item,index)=><Review 
                                                        key={index}
=======
                        reviewsList.map((item)=><Review 
                                                        key={item.date}
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
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