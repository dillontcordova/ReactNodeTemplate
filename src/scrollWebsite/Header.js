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
        Magic.tweenStagger(['#header', ], .25, {opacity: 0, scale: 0.25}, this.triggerElement );
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
                <div className="welcome-title">
                    <div ref={this.addTextRef} id="welcome">
                        <strong>
                            Welcome to
                        </strong>
                    </div>

                    <div ref={this.addTextRef} id="gen">
                        <strong>
                            Gen Korean B.B.Q.
                        </strong>
                            Restaurant
                    </div>

                    <div ref={this.addTextRef} id="premium">
                        <strong>
                            Premium all you can eat
                        </strong>
                    </div>
                </div>
               {/* <div onClick={this.scrollDown} className="learn-more col-lg-12">
                    <p ref={this.addTextRef} >
                        Learn more about me
                    </p>
                    <span ref={this.addComponentRef} className="glyphicon glyphicon-chevron-down"/>
                </div>*/}
            </section>
        );
    }
}

export default Header;