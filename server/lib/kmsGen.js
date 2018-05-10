const AWS = require('aws-sdk');

module.exports = function kmsGen( kmsParams, config, callback ){
    const KMS = new AWS.KMS( config );

    KMS.generateDataKey( kmsParams, (err, dataKey) => {
        if( err || !dataKey.Plaintext ){
            return callback( err );
        }
        callback( null, {
            plainKey    : dataKey.Plaintext,
            cipherKey   : dataKey.CiphertextBlob.toString('base64')
        });
    });
};