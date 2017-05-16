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
        Magic.tweenParallax('#parallaxHeaderBg', this.triggerElement );
        Magic.tweenFrom(this.textRefs, 2, { ease: 'Bounce.easeOut', y: 500, opacity: 0}, this.triggerElement );
        Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div ref={this.getTrigger} className="container">
                <div className="row">

                    <div ref={this.addComponentRef} id="left" className="col-lg-12">
                        <h1 ref={this.addTextRef} >Responsive Web Design</h1>
                        <p ref={this.addTextRef} >
                            Professional full-stack developer with a strong fluency in Javascript, react, angular,
                            node, and express. Each endeavor adding to the depth of my skill-set, from converting freelance jobs into a
                            MERN / MEAN Stack environment, to game engines written in JS / Canvas. Each a stepping stones to the furthering of code innovation.
                        </p>
                    </div>

                    <div ref={this.addComponentRef} id="right" className="col-lg-12 hidden-xs hidden-sm hidden-md">
                        <img src="/images/Responsive-Web-Design.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;