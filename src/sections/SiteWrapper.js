/**
 * Created by dillo_000 on 5/19/2017.
 */
import React, {Component} from 'react';
import Navigation from './Nav';
import Footer from './Footer';

import Amplify, {Auth} from 'aws-amplify';
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

        //TODO: make render happen after this
        Auth.currentCredentials()
            .then((credentials) => {
                console.log();
                Object.assign( config.aws, {
                    credentials: Auth.essentialCredentials(credentials)
                });
            })
        ;

        return (
            <div>
                <Navigation />

                {this.props.children}

                <Footer/>
            </div>
        );
    }
}

export default withAuthenticator(SiteWrapper);