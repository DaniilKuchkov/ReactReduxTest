import React, { Component } from 'react';


import User from '../components/User/User';
import ServiceList from '../components/ServicesList/ServicesList';
import Reviews from '../components/Reviews/Reviews';

import '../styles/style.css';
import '../styles/reset.css';
class App extends Component {
    render() {
        return (
            <div className="app">
                <User/>
                <ServiceList total={30}/>
                <Reviews/>
            </div>
        );
    }
}





export default App;