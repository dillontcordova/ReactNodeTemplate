/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';
import {TweenLite} from "gsap";

class Team extends Component {
    constructor(_props) {
        super(_props);
    }

    componentDidMount() {
        TweenLite.from( '#team', 1, {y: -300, opacity: 0} );

        TweenLite.set( '#contact', {hidden: false} );
        TweenLite.from( '#contact', 1, {y: 1000, opacity: 0} );
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Meet our team</h2>
                    <p>
                        Dedicated and ready when you are! Tell us what you need and we will make it happen.
                    </p>

                    <div className="col-lg-6 col-md-6">
                        <img src="/images/team/Dillon.jpg" className="img-circle" alt=""/>
                        <h4>John Doe</h4>
                        <a href="https://www.linkedin.com/in/dilloncordova/">
                            <i className="fa fa-linkedin"/>
                        </a>
                        <b>CEO and Founder</b>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>

                    <div className="col-lg-6 col-md-6">
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