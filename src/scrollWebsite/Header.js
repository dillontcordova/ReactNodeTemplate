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
        Magic.tweenStagger(['#header', '.header-content'], .25, {opacity: 0, scale: 0.25}, this.triggerElement, .5);
    }

    scrollDownToHire = () => {
        Magic.scrollTo('#contact');
    };

    scrollDown = () => {
        Magic.scrollTo('#services');
    };

    render() {
        return (
            <section id="header" ref={this.getTrigger}>
                <div className="header-content">
                    <div className="col-lg-12">
                        <h1 className="title">
                            Responsive Web Design
                        </h1>
                        <p className="summary">
                            Professional full-stack developer with a strong fluency in Javascript, react, angular,
                            node, and express. Each endeavor adding to the depth of my skill-set, from converting freelance jobs into a
                            MERN / MEAN Stack environment, to game engines written in JS / Canvas. Each a stepping stones to the furthering of code innovation.
                        </p>
                    </div>

                    <div className="col-lg-12">
                        <img onClick={this.scrollDownToHire} className="hire-me hidden-xs hidden-sm hidden-md" src="/images/team/self.png" alt=""/>
                        <p className="img-description hidden-xs hidden-sm hidden-md">Wanna hire me?</p>

                        <div onClick={this.scrollDownToHire} className="hire-me hidden-lg">
                            <button className="btn btn-info">Wanna hire me?</button>
                        </div>
                    </div>
                </div>

                <div onClick={this.scrollDown} className="learn-more col-lg-12">
                    <p>
                        Learn more about me
                    </p>
                    <span className="glyphicon glyphicon-chevron-down"/>
                </div>
            </section>
        );
    }
}

export default Header;