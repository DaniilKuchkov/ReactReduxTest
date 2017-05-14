import React, { Component } from 'react';

class UserAvatar extends Component {
    render() {
        return (
            <div className="user-avatar">
                <img src={this.props.src} alt="#"/>
            </div>
        );
    }
}

export default UserAvatar;