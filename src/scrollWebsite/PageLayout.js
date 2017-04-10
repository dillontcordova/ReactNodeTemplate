import React, {Component} from 'react';
// import WebSection from '../lib/WebSection';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
// import Projects from './Projects';
import Pricing from './Pricing';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';


class PageLayout extends Component {

    componentDidMount() {
/*
        new Scene({triggerElement: '#projects'})
            .setClassToggle('#projects', 'fade-in')
            .addTo(controller)
        ;
        new Scene({triggerElement: '#pricing'})
            .setClassToggle('#pricing', 'fade-in')
            .addTo(controller)
        ;
        new Scene({triggerElement: '#team'})
            .setClassToggle('#team', 'fade-in')
            .addTo(controller)
        ;
        new Scene({triggerElement: '#client'})
            .setClassToggle('#client', 'fade-in')
            .addTo(controller)
        ;
        new Scene({triggerElement: '#contact'})
            .setClassToggle('#contact', 'fade-in')
            .addTo(controller)
        ;
        new Scene({triggerElement: '#footer'})
            .setClassToggle('#footer', 'fade-in')
            .addTo(controller)
        ;
*/
    }

    render() {

        return (
            <div>
                <Navigation/>

                <section id="header" className="header" >
                    <Header />
                </section>

                <section id="services" className="services">
                    <Services />
                </section>


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