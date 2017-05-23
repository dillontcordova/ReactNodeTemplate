/**
 * Created by dillo_000 on 5/19/2017.
 */
import React, {Component} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

class SiteWrapper extends Component {
    render() {
        return (
            <div>
                <Navigation />

                {this.props.children}

                <section id="footer">
                    <Footer/>
                </section>
            </div>
        );
    }
}

export default SiteWrapper;