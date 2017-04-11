/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';

class Team extends Component {

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
                    <h2 ref={this.addTextRef} >Meet our team</h2>
                    <p ref={this.addTextRef} >
                        Dedicated and ready when you are! Tell us what you need and we will make it happen.
                    </p>

                    <div ref={this.addComponentRef} className="col-lg-6 col-md-6">
                        <img src="/images/team/Dillon.jpg" className="img-circle" alt=""/>
                        <h4>John Doe</h4>
                        <a href="https://www.linkedin.com/in/dilloncordova/">
                            <i className="fa fa-linkedin"/>
                        </a>
                        <b>CEO and Founder</b>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>

                    <div ref={this.addComponentRef} className="col-lg-6 col-md-6">
                        <img src="/images/team/Derrek.jpg" className="img-circle" alt=""/>
                        <h4>John Doe</h4>
                        <a href="https://www.linkedin.com/in/derrek-cordova-9226803/">
                            <i className="fa fa-linkedin"/>
                        </a>
                        <b>CEO and Founder</b>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"/></a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Team;