/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import {findDOMNode as getDomFromComponent} from 'react-dom';
import Magic from '../lib/Magic';
import FontIcon from './FontIcon';

class Clients extends Component {

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
        this.componentRefs.push( getDomFromComponent(_ref) );
    };

    componentDidMount() {
        Magic.tweenParallax('#parallaxClientsBg', 1, {}, this.triggerElement );
        Magic.tweenFrom(this.textRefs, 1, { opacity: 0, scaleX: -1, y: 500}, this.triggerElement );
        Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div>
                <div id="parallaxClientsBg"/>
                <div ref={this.getTrigger} className="container">
                    <div className="row my-skills-icon">
                        <h2 ref={this.addTextRef} >Reviews</h2>
                        <p ref={this.addTextRef} >
                            Each useful in their own way.
                            All skills that can be used to further develop your product!
                        </p>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-java" linkUrl="https://www.heroku.com/what"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-cplusplus" linkUrl="http://www.cplusplus.com/info/faq/" color="blue"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-javascript-alt" linkUrl="#" color="gold"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-mongodb" linkUrl="#" color="green"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-heroku" linkUrl="#" color="purple"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-git" linkUrl="#" color="darkred"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-nodejs" linkUrl="#" color="green"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-angular-alt" linkUrl="#" color="red"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-css3-alt" linkUrl="#" color="royalblue"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-reactjs" linkUrl="#" color="deepskyblue"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-html5-alt" linkUrl="#" color="orange"/>
                        <FontIcon ref={this.addComponentRef} fontClassName="icon-bootstrap" linkUrl="#" color="purple"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clients;