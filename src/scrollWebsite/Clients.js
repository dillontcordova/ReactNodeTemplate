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
        Magic.tweenFrom(this.textRefs, 1, { opacity: 0, scaleX: -1, y: 500}, this.triggerElement );
        Magic.tweenStagger(this.componentRefs, 1, {scale: 0.5, opacity: 0, delay: 0.5, ease: 'Elastic.easeOut', force3D: true}, this.triggerElement );
    }

    render() {
        return (
            <div ref={this.getTrigger} className="container">
                <div className="row my-skills-icon">
                    <h2 ref={this.addTextRef} >Current Skillset</h2>
                    <p ref={this.addTextRef} >
                        Each useful in their own way.
                        All skills that can be used to further develop your product!
                    </p>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-java" linkUrl="https://www.oracle.com/java/index.html"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-cplusplus" linkUrl="http://www.cplusplus.com/info/faq/" color="blue"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-javascript-alt" linkUrl="https://www.javascript.com/" color="gold"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-mongodb" linkUrl="https://www.mongodb.com/" color="green"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-heroku" linkUrl="https://www.heroku.com/what" color="purple"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-git" linkUrl="https://git-scm.com/" color="darkred"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-nodejs" linkUrl="https://nodejs.org/en/" color="green"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-angular-alt" linkUrl="https://angularjs.org/" color="red"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-css3-alt" linkUrl="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" color="royalblue"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-reactjs" linkUrl="https://facebook.github.io/react/" color="deepskyblue"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-html5-alt" linkUrl="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" color="orange"/>
                    <FontIcon ref={this.addComponentRef} fontClassName="icon-bootstrap" linkUrl="http://getbootstrap.com/" color="purple"/>
                </div>
            </div>
        );
    }
}

export default Clients;