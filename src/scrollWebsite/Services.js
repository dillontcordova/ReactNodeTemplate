/**
 * Created by dillo_000 on 3/17/2017.
 */
import React, {Component} from 'react';
import Magic from '../lib/Magic';
import FontIcon from './FontIcon';

class Services extends Component {

    constructor(_props) {
        super(_props);
        this.spinRefs = [];
        this.fadeRefs = [];
    }

    addSpinInRef = (_ref) => {
        this.spinRefs.push(_ref);
    };

    addFadeInRef = (_ref) => {
        // Math.random(1).toFixed(1)-0
        // Magic.animateElementWithCss(_ref, 'fade-in');
        // Magic.animateElementWithTweenTo(_ref, Math.random(1).toFixed(1)-0, {opacity: 0});
        Magic.animateElementWithTweenFrom(_ref, 1, { ease: 'Elastic.easeOut', easeParams:[1, 0.3], y: -500} );
    };

    componentDidMount() {
        // "[id^='brick']" // if you have services that increase based on number eg. services1, services2 ...
        // TweenLite.from( '#services', 0.5, {y: 100, opacity: 0} );
        // TweenLite.from( '.serviceTitleText', 2, {y: 100, opacity: 0} );
        //
        // TweenLite.from( '#row1', 1, {scaleY: -1, opacity: 0} );
        // TweenLite.from( '#row2', .75, {scaleX: -1, opacity: 0});
        // TweenLite.from( '#row3', 2.5, { ease: 'Elastic.easeOut', easeParams:[1, 0.3], y: -500 });
        // TweenLite.from( '#row4', 2, { ease: 'Bounce.easeOut', y: -500, opacity: 0});
        // TweenLite.to( '#row4', 1, { ease: 'Power3.easeInOut', scaleY: 0, y: '-=100%', opacity: 0});
    }

    componentWillUnmount() {}

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2 className="serviceTitleText">Services</h2>
                    <p className="serviceTitleText">
                        Lorem Ipsum is simply dummy text of the
                        printing and type setting dummy text
                    </p>

                    <div ref={this.addFadeInRef}  id="poop" className="col-lg-3 col-md-3">
                        <FontIcon fontClassName='icon-database'/>
                        <h4>Web design</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>

                    <div ref={this.addFadeInRef} id="row2" className="col-lg-3 col-md-3">
                        <FontIcon fontClassName='icon-database'/>
                        <h4>Mobile Apps</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>

                    <div id="row3" className="col-lg-3 col-md-3">
                        <FontIcon fontClassName='icon-database'/>
                        <h4>Database</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>

                    <div id="row4" className="col-lg-3 col-md-3">
                        <FontIcon fontClassName='icon-database'/>
                        <h4>Consulting</h4>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Services;