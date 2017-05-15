import React, { Component } from 'react';

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