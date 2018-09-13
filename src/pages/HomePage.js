import React, {Component} from 'react';
import Header from './Header';
import Ingest from '../sections/Ingest';
import EncryptUploadForm from '../elementLib/EncryptUploadForm';

class PageLayout extends Component {

    render() {
        return (
            <div id="home-page">

                <Header />

                <Ingest />

                {/*<section id="contact" className="contact" >*/}
                    {/*<EncryptUploadForm/>*/}
                {/*</section>*/}
            </div>
        )
    };
}

export default PageLayout;