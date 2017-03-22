/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';

class Footer extends Component {
    constructor(_props) {
        super(_props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <h4>Contact Us</h4>
                        <p>
                            <i className="fa fa-home" aria-hidden="true"/>
                            111 Main Street, Washington DC,
                            22222
                        </p>
                        <p><i className="fa fa-envelope" aria-hidden="true"/> info@media.com</p>
                        <p><i className="fa fa-phone" aria-hidden="true"/> +1 222 222 2222</p>
                        <p><i className="fa fa-globe" aria-hidden="true"/> www.media.com</p>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <h4>About</h4>
                        <p><i className="fa fa-square-o" aria-hidden="true"/> About Us</p>
                        <p><i className="fa fa-square-o" aria-hidden="true"/> Privacy</p>
                        <p><i className="fa fa-square-o" aria-hidden="true"/> Term & Condition</p>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <h4>Stay in touch</h4>
                        <i className="social fa fa-facebook" aria-hidden="true"/>
                        <i className="social fa fa-twitter" aria-hidden="true"/>
                        <i className="social fa fa-linkedin" aria-hidden="true"/>
                        <i className="social fa fa-pinterest" aria-hidden="true"/>
                        <i className="social fa fa-youtube" aria-hidden="true"/>
                        <i className="social fa fa-github" aria-hidden="true"/>
                        <br/>
                        <input type="email" placeholder="Subscribe For Updates"/>
                        <button className="btn btn-success">Subscribe</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;