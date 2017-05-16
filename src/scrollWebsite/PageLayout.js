import React, {Component} from 'react';
// import WebSection from '../lib/WebSection';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import Pricing from './Pricing';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';


class PageLayout extends Component {

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