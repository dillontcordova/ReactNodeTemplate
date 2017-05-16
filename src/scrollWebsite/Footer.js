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
                        <div className="col-lg-12 col-md-12">
                            <h4>Stay in touch</h4>
                            <i className="social fa fa-facebook" aria-hidden="true"/>
                            <i className="social fa fa-linkedin" aria-hidden="true"/>
                            <i className="social fa fa-youtube" aria-hidden="true"/>
                            <i className="social fa fa-github" aria-hidden="true"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;