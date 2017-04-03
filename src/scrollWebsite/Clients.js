/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import {TweenMax} from 'gsap';
import FontIcon from './FontIcon';

class Clients extends Component {
    constructor(_props) {
        super(_props);
        this.references = [];
    }

    componentDidMount() {
        TweenMax.set( '#client', {backgroundColor: '#6699cc'});
        TweenMax.from("#client", .5, {opacity:0});
        TweenMax.staggerFrom(".my-icons", 1, {scale:0.5, opacity:0, delay:0.5, ease: 'Elastic.easeOut'}, 0.2);
    }

    getRef = (_ref) => {
        this.references.push(_ref);
    };

    render() {
        return (
            <div className="container">
                <div className="row my-skills-icon">
                    <h2>Trusted Skills</h2>
                    <p>
                        Each useful in their own way.
                        All skills that can be used to further develop your product!
                    </p>
                    <FontIcon fontClassName="icon-java" linkUrl="https://www.heroku.com/what"/>
                    <FontIcon fontClassName="icon-cplusplus" linkUrl="http://www.cplusplus.com/info/faq/" color="blue"/>
                    <FontIcon fontClassName="icon-javascript-alt" linkUrl="#" color="gold"/>
                    <FontIcon fontClassName="icon-mongodb" linkUrl="#" color="green"/>
                    <FontIcon fontClassName="icon-heroku" linkUrl="#" color="purple"/>
                    <FontIcon fontClassName="icon-git" linkUrl="#" color="darkred"/>
                    <FontIcon fontClassName="icon-nodejs" linkUrl="#" color="green"/>
                    <FontIcon fontClassName="icon-angular-alt" linkUrl="#" color="red"/>
                    <FontIcon fontClassName="icon-css3-alt" linkUrl="#" color="royalblue"/>
                    <FontIcon fontClassName="icon-reactjs" linkUrl="#" color="deepskyblue"/>
                    <FontIcon fontClassName="icon-html5-alt" linkUrl="#" color="orange"/>
                    <FontIcon fontClassName="icon-bootstrap" linkUrl="#" color="purple"/>
                </div>
            </div>
        );
    }
}

export default Clients;