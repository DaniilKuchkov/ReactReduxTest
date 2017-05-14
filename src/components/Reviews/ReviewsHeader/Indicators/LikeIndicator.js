import React, { Component } from 'react';

class LikeIndicator extends Component {
    render() {
        return (
            <span>Like {this.props.likeCount}</span>
        );
    }
}

export default LikeIndicator;