/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';

class Contact extends Component {
    constructor(_props) {
        super(_props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Contact</h2>
                    <p>
                        Lorem Ipsum passages, and more recently
                        with desktop publishing software
                    </p>
                    <div className="col-lg-6 col-md-6">
                        <div className="input-group input-group-lg">
                                    <span className="input-group-addon" id="sizing-addon1">
                                        <i className="fa fa-user" aria-hidden="true"/>
                                    </span>
                            <input type="text" className="form-control" aria-describedby="sizing-addon1" placeholder="Full Name"/>
                        </div>
                        <div className="input-group input-group-lg">
                                    <span className="input-group-addon" id="sizing-addon1">
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                    </span>
                            <input type="text" className="form-control" aria-describedby="sizing-addon1" placeholder="Email Address"/>
                        </div>
                        <div className="input-group input-group-lg">
                                    <span className="input-group-addon" id="sizing-addon1">
                                        <i className="fa fa-phone" aria-hidden="true"/>
                                    </span>
                            <input type="text" className="form-control" aria-describedby="sizing-addon1" placeholder="Phone Number"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="input-group">
                            <textarea name="" id="" cols="80" rows="6" className="form-control"/>
                        </div>
                        <button className="btn btn-lg">
                            Submit Your Message
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;