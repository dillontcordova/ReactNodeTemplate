/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import {Link} from 'rc-scroll-anim';

class Navigation extends Component {
    constructor(_props) {
        super(_props);
    }

    render() {
        return (
            <div id="myNavbar" className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a href="#" className="navbar-brand">Media</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#header">Home</a></li>
                            <li><a href="#services">services</a></li>
                            <li><a href="#pricing">pricing</a></li>
                            <li><a href="#team">team</a></li>
                            <li><a href="#client">clients</a></li>
                            <li><a href="#contact">contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;