import React, { Component } from 'react';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

import './style.css';

<<<<<<< HEAD
let str = "Make let, not var !"
=======
let str = "Work Hard, make money!"
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
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