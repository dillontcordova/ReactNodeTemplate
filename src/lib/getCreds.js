import {Auth} from "aws-amplify/lib/index";

module.exports = function( callback ){
    Auth.currentCredentials()
        .then( (credentials) => {
            callback( null, Auth.essentialCredentials(credentials) );
        })
        .catch( (e) => {
            callback( e );
        })
    ;
};