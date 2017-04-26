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
        Magic.tweenParallax("#parallaxBg", 1, {}, this.triggerElement );
        Magic.tweenFrom(this.textRefs, 2, { ease: 'Bounce.easeOut', y: 500, opacity: 0}, this.triggerElement );
        Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div>

            <div id="parallaxBg"/>
            <div ref={this.getTrigger} className="container">
                <div className="row">

                    <div ref={this.addComponentRef} id="left" className="col-lg-12 col-md-12">
                        <img src="/images/Responsive-Web-Design.png" alt=""/>
                        <h1 ref={this.addTextRef} >WHO ELSE BUT ELSA!</h1>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}

export default Header;