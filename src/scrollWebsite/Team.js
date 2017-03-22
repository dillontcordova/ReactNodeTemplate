/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';

class Team extends Component {
    constructor(_props) {
        super(_props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Meet our team</h2>
                    <p>Lorem Ipsum passages, and more recently
                        with
                        desktop publishing software</p>
                    <div className="col-lg-3 col-md-3">
                        <img src="/images/team/team-1.jpg" className="img-circle" alt=""/>
                        <h4>John Doe</h4>
                        <b>CEO and Founder</b>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"/></a>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <img src="/images/team/team-2.jpg" className="img-circle" alt=""/>
                        <h4>John Doe</h4>
                        <b>CEO and Founder</b>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"/></a>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <img src="/images/team/team-3.jpg" className="img-circle" alt=""/>
                        <h4>John Doe</h4>
                        <b>CEO and Founder</b>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"/></a>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <img src="/images/team/team-4.jpg" className="img-circle" alt=""/>
                        <h4>John Doe</h4>
                        <b>CEO and Founder</b>
                        <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;