import React, {Component} from 'react';
import Header from '../sections/Header';
import Ingest from '../sections/Ingest';

class PageLayout extends Component {

    render() {
        return (
            <div id="home-page">

                <Header />

                <Ingest />

            </div>
        )
    };
}

export default PageLayout;