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
        // Magic.tweenParallax('#parallaxHeaderBg', this.triggerElement );
        Magic.tweenFrom(this.textRefs, 2, { ease: 'Bounce.easeOut', y: 500, opacity: 0}, this.triggerElement );
        Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    scrollDownToHire = () => {
        Magic.scrollTo('#contact');
    };

    scrollDown = () => {
        Magic.scrollTo('#services');
    };

    render() {
        return (
            <div ref={this.getTrigger} className="container">
                <div className="row">
                    <div ref={this.addComponentRef} className="col-lg-12">
                        <h1 className="title" ref={this.addTextRef} >Responsive Web Design</h1>
                        <p className="summary" ref={this.addTextRef} >
                            Professional full-stack developer with a strong fluency in Javascript, react, angular,
                            node, and express. Each endeavor adding to the depth of my skill-set, from converting freelance jobs into a
                            MERN / MEAN Stack environment, to game engines written in JS / Canvas. Each a stepping stones to the furthering of code innovation.
                        </p>
                    </div>

                    <div ref={this.addComponentRef} className="col-lg-12">
                        <img onClick={this.scrollDownToHire} className="hire-me hidden-xs hidden-sm hidden-md" src="/images/team/self.png" alt=""/>
                        <p className="img-description hidden-xs hidden-sm hidden-md">Wanna hire me?</p>

                        <div onClick={this.scrollDownToHire} className="hire-me hidden-lg">
                            <button className="btn btn-info">Wanna hire me?</button>
                        </div>
                    </div>

                    <div onClick={this.scrollDown} className="learn-more col-lg-12">
                        <p ref={this.addTextRef} >
                            Learn more about me
                        </p>
                        <span ref={this.addComponentRef} className="glyphicon glyphicon-chevron-down"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;