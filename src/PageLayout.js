import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import ReactTransitionGroup from 'react-addons-transition-group' // ES6
// import {Link} from 'react-router';

class PageLayout extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src="/logo.svg" className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default PageLayout;
