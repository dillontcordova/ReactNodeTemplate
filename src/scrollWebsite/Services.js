/**
 * Created by dillo_000 on 3/17/2017.
 */
import React, {Component} from 'react';
import {TweenLite} from "gsap";

class Services extends Component {

    componentDidMount() {
        // "[id^='brick']" // if you have services that increase based on number eg. services1, services2 ...
        TweenLite.from( "[id^='services']", 0.5, {y: 100, opacity: 0} );
        TweenLite.from( "[id^='serviceTitleText']", 0.5, {x: 100, opacity: 0} );
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="container">
                <h2 id="serviceTitleText1">Services</h2>
                <p id="serviceTitleText2">
                    Lorem Ipsum is simply dummy text of the
                    printing and typesettin dummy text
                </p>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <i/>
                        <h4>web design</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <i/>
                        <h4>Mobile Apps</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <i/>
                        <h4>Database</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <i/>
                        <h4>Consulting</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;