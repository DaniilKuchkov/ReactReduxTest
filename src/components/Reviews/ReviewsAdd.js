import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { changeName, changeText, addReview} from '../../actions/reviewsActions'

class ReviewsAdd extends Component {
    serializeData(name,reviewText){
        return {
            name,
            date: Date.now(),
            reviewText
        }
    }
    render() {
        const {changeName,changeText,addReview,name,reviewText} = this.props;
        return (
            <div className="reviews-add">
                <input className="reviews-add-name" type="text" placeholder="Enter Your Name"onChange={(e)=>changeName(e.target.value)}/>
                <textarea name="reviews-text" 
                          id="reviews-text" 
                          cols="30" 
                          rows="5" 
                          onChange={(e)=>changeText(e.target.value)}>
                </textarea>
                <button
                    onClick={()=>{addReview(this.serializeData(name,reviewText))}}
                    className="reviews-add-button"
                    >Написать консультанту</button>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        name: state.reviews.name,
        reviewText: state.reviews.reviewText
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
       changeName: bindActionCreators(changeName, dispatch),
       changeText: bindActionCreators(changeText, dispatch),
       addReview: bindActionCreators(addReview,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReviewsAdd);