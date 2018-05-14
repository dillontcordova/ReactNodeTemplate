import React, {Component} from 'react';
import Header from './Header';
import Contact from './Contact';

class PageLayout extends Component {

    render() {
        return (
            <div id="home-page">

                <Header />

                <section id="contact" className="contact" >
                    <Contact/>
                </section>
            </div>
        )
    };
}

export default PageLayout;