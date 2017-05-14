import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div className="user-info">
                <h2 className="user-info-name">{this.props.userFirstName} {this.props.userLastName}</h2>
                <p className="user-info-position">{this.props.position}</p>
                <p className="user-info-status">{this.props.status}</p>
            </div>
        );
    }
}

export default UserInfo;