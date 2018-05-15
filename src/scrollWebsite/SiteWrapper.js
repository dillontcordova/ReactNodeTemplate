/**
 * Created by dillo_000 on 5/19/2017.
 */
import React, {Component} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import Amplify, {Auth} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react';

const config = {
    aws: {
        region: 'us-west-2'
    },
    userPoolId          : 'us-west-2_IVvBdKOUF',
    userPoolWebClientId : '5gqs1lqgtff7rh7o6uavr6jkgu',
    identityPoolId      : 'us-west-2:1b3ceec3-16eb-4d86-bfd9-dd9d3322f53d'
};

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

export default withAuthenticator(SiteWrapper);