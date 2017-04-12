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

    componentDidMount() {}

    render() {

        return (
            <div>
                <Navigation/>

                <section id="header" className="header" >
                    <Header />
                </section>


            </div>
        )
    };
}

export default PageLayout;