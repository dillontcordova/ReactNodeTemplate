import React, {Component} from 'react';
import {OverPack as ScrollOver} from 'rc-scroll-anim';

import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import Pricing from './Pricing';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';

class PageLayout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Navigation/>

                <Header/>

                <ScrollOver id="services" className="services"always={false}>
                    <Services/>
                </ScrollOver>

                <ScrollOver id="pricing" className="pricing" always={false}>
                    <Pricing/>
                </ScrollOver>

                <ScrollOver id="team" className="team" always={false}>
                    <Team/>
                </ScrollOver>

                <ScrollOver id="client" className="clients" always={false}>
                    <Clients/>
                </ScrollOver>

                <Contact/>

                <Footer/>
            </div>
        )
    };
}

export default PageLayout;