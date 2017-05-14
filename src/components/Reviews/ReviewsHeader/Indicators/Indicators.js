import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
=======
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8

import LikeIndicator from './LikeIndicator';
import ReviewsIndicator from './ReviewsIndicator';

<<<<<<< HEAD
import { increaseLikeCount } from '../../../../actions/indicatorActions';

class Indicators extends Component {
    render() {
        let {likeCount,reviewsCount, increaseLikeCount} = this.props;
        return (
            <span className="indicators">
                <LikeIndicator likeCount={likeCount} increaseLikeCount={increaseLikeCount}/>
=======
class Indicators extends Component {
    render() {
        let {likeCount,reviewsCount} = this.props;
        return (
            <span className="indicators">
                <LikeIndicator likeCount={likeCount}/>
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
                <ReviewsIndicator reviewsCount={reviewsCount}/>
            </span>
        );
    }
}
<<<<<<< HEAD
const mapStateToProps = (state) =>{
    return {
        likeCount: state.indicators.likeCount,
        reviewsCount: state.indicators.reviewCount
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        increaseLikeCount: bindActionCreators(increaseLikeCount,dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Indicators);
=======

export default Indicators;
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
