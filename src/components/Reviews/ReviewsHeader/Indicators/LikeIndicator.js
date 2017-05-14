import React, { Component } from 'react';

class LikeIndicator extends Component {
    render() {
        return (
<<<<<<< HEAD
            <span onClick={()=> this.props.increaseLikeCount()}>
                <span className="heart-symbol">&#10084;</span>{this.props.likeCount}
            </span>
=======
            <span>Like {this.props.likeCount}</span>
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
        );
    }
}

export default LikeIndicator;