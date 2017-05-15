import React, { Component } from 'react';

class LikeIndicator extends Component {
    render() {
        return (
            <span onClick={()=> this.props.increaseLikeCount()}>
                <span className="heart-symbol">&#10084;</span>{this.props.likeCount}
            </span>
        );
    }
}

export default LikeIndicator;