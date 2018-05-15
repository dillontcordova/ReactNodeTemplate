/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return (
            <section id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h4>Stay in touch</h4>
                            <a href="https://www.linkedin.com/company/warner-bros--entertainment-group-of-companies">
                                <i className="social fa fa-linkedin"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;