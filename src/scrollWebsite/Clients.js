/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';

class Clients extends Component {
    constructor(_props) {
        super(_props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Trusted by</h2>
                    <p>Lorem Ipsum passages, and more recently
                        with
                        desktop publishing software</p>
                    <div className="col-lg-3 col-md-3">
                        <li><img src="/images/clients/client1.png" alt=""/></li>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <li><img src="/images/clients/client2.png" alt=""/></li>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <li><img src="/images/clients/client3.png" alt=""/></li>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <li><img src="/images/clients/client4.png" alt=""/></li>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clients;