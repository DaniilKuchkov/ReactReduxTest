import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

<<<<<<< HEAD
import { changeName, changeText, addReview} from '../../actions/reviewsActions';
import { increaseReviewCount } from '../../actions/indicatorActions';
import { parseNumInMonth } from '../../helpers/helpers';

class ReviewsAdd extends Component {
    serializeData(name,reviewText){
        const date = new Date();
        return {
            name,
            date: `${date.getDate()} ${parseNumInMonth(date.getMonth())} ${date.getFullYear()}`,
=======
import { changeName, changeText, addReview} from '../../actions/reviewsActions'

class ReviewsAdd extends Component {
    serializeData(name,reviewText){
        return {
            name,
            date: Date.now(),
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
            reviewText
        }
    }
    render() {
<<<<<<< HEAD
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
=======
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
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
                    className="reviews-add-button"
                    >Написать консультанту</button>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        name: state.reviews.name,
<<<<<<< HEAD
        reviewText: state.reviews.reviewText,
=======
        reviewText: state.reviews.reviewText
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
       changeName: bindActionCreators(changeName, dispatch),
       changeText: bindActionCreators(changeText, dispatch),
<<<<<<< HEAD
       increaseReviewCount: bindActionCreators(increaseReviewCount,dispatch),
=======
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
       addReview: bindActionCreators(addReview,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReviewsAdd);