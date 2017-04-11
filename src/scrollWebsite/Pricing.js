/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';

class Pricing extends Component {

    constructor(_props) {
        super(_props);
        this.textRefs = [];
        this.componentRefs = [];
        this.triggerElement = null;
    }

    getTrigger = (_ref) => {
        this.triggerElement = _ref;
    };

    addTextRef = (_ref) => {
        this.textRefs.push(_ref);
    };

    addComponentRef = (_ref) => {
        this.componentRefs.push(_ref);
    };

    componentDidMount() {
        Magic.animateElementWithTweenFrom(this.textRefs, 1, { opacity: 0, scaleX: -1, y: 500}, this.triggerElement );
        Magic.animateElementWithTweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div ref={this.getTrigger} className="container">
                <div className="row">
                    <h2 ref={this.addTextRef} >Pricing</h2>
                    <p ref={this.addTextRef} >
                        orem Ipsum passages, and more recently with
                        desktop publishing software
                    </p>

                    <div ref={this.addComponentRef} className="col-lg-4 col-md-4">
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

                    <div ref={this.addComponentRef} className="col-lg-4 col-md-4">
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

                    <div ref={this.addComponentRef} className="col-lg-4 col-md-4">
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