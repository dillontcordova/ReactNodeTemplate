/**
 * Created by dillo_000 on 3/22/2017.
 */
import React, {Component} from 'react';

class Header extends Component {

    componentDidMount() {
        // TweenLite.from( '#left', 2, { ease: 'Bounce.easeOut', y: 500, opacity: 0});
        // TweenLite.from( '#right', 2, { ease: 'Bounce.easeOut', y: -500, opacity: 0});
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div id="left" className="col-lg-6 col-md-6">
                        <h1>Responsive Web Design</h1>
                        <p>
                            Design for the future, design for your business.
                            Every company needs that online brochure to lure in those
                            already hungry customers. More than 2.4 billion people use
                            the internet every day, and some 90% of those are looking
                            to buy a product. Create work with us and we'll put you on
                            the Map!
                        </p>
                        <button className="btn btn-lg btn-primary">Buy Now</button>
                        <button className="btn btn-lg btn-success">View Detail</button>
                    </div>

                    <div id="right" className="col-lg-6 col-md-6">
                        <img src="/images/Responsive-Web-Design.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;