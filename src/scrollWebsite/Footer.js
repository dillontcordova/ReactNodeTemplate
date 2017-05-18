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
                            <a href="https://www.linkedin.com/in/dilloncordova/">
                                <i className="social fa fa-linkedin"/>
                            </a>

                            <a href="https://github.com/dillontcordova/">
                                <i className="social fa fa-github"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;