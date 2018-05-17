import {Auth} from "aws-amplify/";
import config from '../lib/config';

module.exports = function( callback ){
    if(config.aws.credentials){
        return callback( null, config.aws );
    } else {
        Auth.currentCredentials()
            .then( (credentials) => {

                Object.assign( config.aws, {
                    credentials: Auth.essentialCredentials(credentials)
                });

                callback( null, config.aws );
            })
            .catch( (e) => {
                callback( e );
            })
        ;
    }
};