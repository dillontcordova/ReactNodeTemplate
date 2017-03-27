/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import {TweenMax, TweenLite} from "gsap";

class Pricing extends Component {

    componentDidMount() {
        TweenMax.set( '#pricing', {backgroundColor: '#6699cc'});
        TweenLite.from( '#pricing', 0.5, {y: 100, opacity: 0} );
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Pricing</h2>
                    <p>orem Ipsum passages, and more recently with
                        desktop publishing software</p>
                    <div className="col-lg-3 col-md-3">
                        <div className="packages">
                            <h4>Bronze</h4>
                            <h1>9.99</h1>
                            <b>Monthly</b>
                            <p>Lorem Ipsum passages, and more recently with desktop</p>
                            <hr/>
                            <li>100 Users</li>
                            <li>SSL Certificate</li>
                            <li>Online Support</li>
                            <li>300GB Disckspace</li>
                            <li>100 Email Address</li>
                            <li>MySQL Database</li>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="packages">
                            <h4>Silver</h4>
                            <h1>19.99</h1>
                            <b>Monthly</b>
                            <p>Lorem Ipsum passages, and more recently with desktop</p>
                            <hr/>
                            <li>100 Users</li>
                            <li>SSL Certificate</li>
                            <li>Online Support</li>
                            <li>300GB Disckspace</li>
                            <li>100 Email Address</li>
                            <li>MySQL Database</li>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="packages">
                            <h4>Gold</h4>
                            <h1>29.99</h1>
                            <b>Monthly</b>
                            <p>Lorem Ipsum passages, and more recently with desktop</p>
                            <hr/>
                            <li>100 Users</li>
                            <li>SSL Certificate</li>
                            <li>Online Support</li>
                            <li>300GB Disckspace</li>
                            <li>100 Email Address</li>
                            <li>MySQL Database</li>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="packages">
                            <h4>Premium</h4>
                            <h1>39.99</h1>
                            <b>Monthly</b>
                            <p>Lorem Ipsum passages, and more recently with desktop</p>
                            <hr/>
                            <li>100 Users</li>
                            <li>SSL Certificate</li>
                            <li>Online Support</li>
                            <li>300GB Disckspace</li>
                            <li>100 Email Address</li>
                            <li>MySQL Database</li>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;