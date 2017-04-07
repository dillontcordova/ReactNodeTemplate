import React, {Component} from 'react';
import WebSection from '../lib/WebSection';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import Projects from './Projects';
import Pricing from './Pricing';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import {TweenMax} from "gsap";
const ScrollMagic = typeof window !== 'undefined' ? require( 'scrollmagic') : undefined;

class PageLayout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.controller = new ScrollMagic.Controller();
        WebSection.setScrollController(this.controller);

        new ScrollMagic.Scene({triggerElement: '#services'})
            .setClassToggle('#services', 'fade-in')
            .addTo(this.controller)
        ;
        // new ScrollMagic.Scene({triggerElement: '#projects'})
        //     .setClassToggle('#projects', 'fade-in')
        //     .addTo(this.controller)
        // ;
        new ScrollMagic.Scene({triggerElement: '#pricing'})
            .setClassToggle('#pricing', 'fade-in')
            .addTo(this.controller)
        ;
        new ScrollMagic.Scene({triggerElement: '#team'})
            .setClassToggle('#team', 'fade-in')
            .addTo(this.controller)
        ;
        new ScrollMagic.Scene({triggerElement: '#client'})
            .setClassToggle('#client', 'fade-in')
            .addTo(this.controller)
        ;
        new ScrollMagic.Scene({triggerElement: '#contact'})
            .setClassToggle('#contact', 'fade-in')
            .addTo(this.controller)
        ;
        new ScrollMagic.Scene({triggerElement: '#footer'})
            .setClassToggle('#footer', 'fade-in')
            .addTo(this.controller)
        ;
    }

    render() {
        return (
            <div>

                <Navigation/>

                <section id="header" className="header" >
                    <Header controller={this.controller}/>
                </section>

                <section id="services" className="services">
                    <Services/>
                </section>

                {/*<section id="projects" className="projects" >*/}
                    {/*<Projects/>*/}
                {/*</section>*/}

                <section id="pricing" className="pricing" >
                    <Pricing/>
                </section>

                <section id="team" className="team"  >
                    <Team/>
                </section>

                <section id="client" className="clients" >
                    <Clients/>
                </section>

                <section id="contact" className="contact" >
                    <Contact/>
                </section>

                <section id="footer" className="footer" >
                    <Footer/>
                </section>

            </div>
        )
    };
}

export default PageLayout;