import React, { Component } from 'react';

<<<<<<< HEAD
import User from '../components/User/User';
import ServiceList from '../components/ServicesList/ServicesList';
import Reviews from '../components/Reviews/Reviews';
import { runOnKeys, focusOn } from '../helpers/helpers';

import '../styles/style.css';
import '../styles/reset.css';
import '../styles/media.css';

class App extends Component {
    
    componentDidMount() {
        runOnKeys(()=>focusOn(document.querySelector('.reviews-add-name')),
  "Enter",
  "Control"
);

    }
    
=======

import User from '../components/User/User';
import ServiceList from '../components/ServicesList/ServicesList';
import Reviews from '../components/Reviews/Reviews';

import '../styles/style.css';
import '../styles/reset.css';
class App extends Component {
>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
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

<<<<<<< HEAD
=======




>>>>>>> 1417737d8a21b44a4583e8e9708c0bdf9f0170c8
export default App;