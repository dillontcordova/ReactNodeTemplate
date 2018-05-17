import React, {Component} from 'react';
import Navigation from './Nav';
import Footer from './Footer';

import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react';
import config from '../lib/config';


Amplify.configure({
    Auth: {
        region              : config.aws.region,
        userPoolId          : config.userPoolId,
        identityPoolId      : config.identityPoolId,
        userPoolWebClientId : config.userPoolWebClientId
    }
});


class SiteWrapper extends Component {
    render() {
        return (
            <div>
                <Navigation />

                {this.props.children}

                <Footer/>
            </div>
        );
    }
}

export default withAuthenticator( SiteWrapper );