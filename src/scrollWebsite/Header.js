/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';

class Header extends Component {
    constructor(_props) {
        super(_props);
    }

    render() {
        return (
            <div id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h1>Responsive Web Design</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic
                                typesetting,</p>
                            <button className="btn btn-lg btn-primary">Buy Now</button>
                            <button className="btn btn-lg btn-success">View Detail</button>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <img src="/images/Responsive-Web-Design.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;