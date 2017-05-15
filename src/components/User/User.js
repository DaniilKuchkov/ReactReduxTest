import React, { Component } from 'react';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

import './style.css';

let str = "Make let, not var !"
class User extends Component {
    render() {
        return (
            <div className="user">
                <UserAvatar src={require("../../imgs/avatar.jpg")}/>
                <UserInfo userFirstName="Daniil" 
                          userLastName="Kuchkov" 
                          position="Front-end-Developer" 
                          status={str}
                />
            </div>
        );
    }
}

export default User;