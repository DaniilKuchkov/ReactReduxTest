import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { changeName, changeText, addReview} from '../../actions/reviewsActions';
import { increaseReviewCount } from '../../actions/indicatorActions';
import { parseNumInMonth } from '../../helpers/helpers';

class ReviewsAdd extends Component {
    serializeData(name,reviewText){
        const date = new Date();
        return {
            name,
            date: `${date.getDate()} ${parseNumInMonth(date.getMonth())} ${date.getFullYear()}`,
            reviewText
        }
    }
    render() {
        const {changeName,changeText,addReview,name,reviewText,increaseReviewCount,autofocus} = this.props;
        return (
            <div className="reviews-add">
                <input className="reviews-add-name" 
                       type="text" 
                       placeholder="Enter Your Name"
                       autoFocus={autofocus}
                       onChange={(e)=>changeName(e.target.value)}
                       value={name}
                       />
                <textarea name="reviews-text" 
                          id="reviews-text" 
                          cols="30"
                          placeholder="Type msg here..."
                          rows="5"
                          value={reviewText}
                          onChange={(e)=>changeText(e.target.value)}>
                </textarea>
                <button
                    onClick={()=>{
                        increaseReviewCount()
                        addReview(this.serializeData(name,reviewText))
                        changeText('')
                    }}
                    className="reviews-add-button"
                    >Написать консультанту</button>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        name: state.reviews.name,
        reviewText: state.reviews.reviewText,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
       changeName: bindActionCreators(changeName, dispatch),
       changeText: bindActionCreators(changeText, dispatch),
       increaseReviewCount: bindActionCreators(increaseReviewCount,dispatch),
       addReview: bindActionCreators(addReview,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReviewsAdd);