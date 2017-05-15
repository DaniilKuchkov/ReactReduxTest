import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LikeIndicator from './LikeIndicator';
import ReviewsIndicator from './ReviewsIndicator';

import { increaseLikeCount } from '../../../../actions/indicatorActions';

class Indicators extends Component {
    render() {
        let {likeCount,reviewsCount, increaseLikeCount} = this.props;
        return (
            <span className="indicators">
                <LikeIndicator likeCount={likeCount} increaseLikeCount={increaseLikeCount}/>
                <ReviewsIndicator reviewsCount={reviewsCount}/>
            </span>
        );
    }
}
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