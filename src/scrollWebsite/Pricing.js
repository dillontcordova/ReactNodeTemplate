/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import {TweenMax, TweenLite} from "gsap";

class Pricing extends Component {

    componentDidMount() {
        // TweenMax.set( '#pricing', {backgroundColor: '#6699cc'});
        // TweenLite.from( '#pricing', 0.5, {y: 100, opacity: 0} );
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Pricing</h2>
                    <p>
                        orem Ipsum passages, and more recently with
                        desktop publishing software
                    </p>
                    <div className="col-lg-4 col-md-4">
                        <div className="packages">
                            <h4>Bronze</h4>
                            <h1>499.99</h1>
                            <b>One Time Payment</b>
                            <p>Template based website</p>
                            <li>User interactive/scroll response animations</li>
                            <li>MongoDB Database Ready</li>
                            <li>Cross browser compatibility</li>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="packages">
                            <h4>Silver</h4>
                            <h1>849.99</h1>
                            <b>One Time Payment</b>
                            <p>Template based website</p>
                            <li>Mobile responsive design</li>
                            <li>Fast Start up time</li>
                            <li>Includes all of Silver</li>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="packages">
                            <h4>Gold</h4>
                            <h1>TBD</h1>
                            <b>Hourly</b>
                            <p>Custom website designed by you!</p>
                            <li>Website Maintenance</li>
                            <li>Extensive QA testing</li>
                            <li>Includes all of Gold</li>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;