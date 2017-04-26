/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';

class Footer extends Component {


    render() {
        return (
            <div id="footer" className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-6">
                            <h4>Contact Us</h4>
                            <p>
                                <i className="fa fa-home" aria-hidden="true"/>
                                Sherman Oaks, Ca
                            </p>
                            <p><i className="fa fa-envelope" aria-hidden="true"/> whoelsebutelsa@gmail.com</p>
                            <p><i className="fa fa-phone" aria-hidden="true"/> +1 818 383 6859</p>
                            <p><i className="fa fa-globe" aria-hidden="true"/> 8:00am - 8:00pm</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <h4>Location</h4>
                            <p><i className="fa fa-square-o" aria-hidden="true"/> About Us</p>
                            <p><i className="fa fa-square-o" aria-hidden="true"/> Privacy</p>
                            <p><i className="fa fa-square-o" aria-hidden="true"/> Term & Condition</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;