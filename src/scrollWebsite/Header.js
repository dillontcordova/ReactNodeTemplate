/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';

class Header extends Component {

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
        Magic.animateElementWithTweenFrom(this.textRefs, 2, { ease: 'Bounce.easeOut', y: 500, opacity: 0}, this.triggerElement );
        Magic.animateElementWithTweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div ref={this.getTrigger} className="container">
                <div className="row">

                    <div ref={this.addComponentRef} id="left" className="col-lg-6 col-md-6">
                        <h1 ref={this.addTextRef} >Responsive Web Design</h1>
                        <p ref={this.addTextRef} >
                            Design for the future, design for your business.
                            Every company needs that online brochure to lure in those
                            already hungry customers. More than 2.4 billion people use
                            the internet every day, and some 90% of those are looking
                            to buy a product. Create work with us and we'll put you on
                            the Map!
                        </p>
                        <button className="btn btn-lg btn-primary">Buy Now</button>
                        <button className="btn btn-lg btn-success">View Detail</button>
                    </div>

                    <div ref={this.addComponentRef} id="right" className="col-lg-6 col-md-6">
                        <img src="/images/Responsive-Web-Design.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;