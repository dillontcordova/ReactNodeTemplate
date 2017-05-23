import React, {Component} from 'react';
import Header from './Header';
import Services from './Services';
import Projects from './Projects';
import Clients from './Clients';
import Contact from './Contact';

class PageLayout extends Component {

    render() {
        return (
            <div id="home-page">

                    <Header />


                <section id="services" className="services">
                    <Services />
                </section>

                <section id="projects" className="projects" >
                    <Projects/>
                </section>

                <section id="client" className="clients" >
                    <Clients/>
                </section>

                <section id="contact" className="contact" >
                    <Contact/>
                </section>
            </div>
        )
    };
}

export default PageLayout;