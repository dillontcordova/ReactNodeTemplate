const AWS = require('aws-sdk');

module.exports = function s3StreamUpload( s3Params, config, cb ){
    const S3 = new AWS.S3(config);
    S3.upload(s3Params)
        .on('httpUploadProgress', function(evt) {
            console.log('Progress:', evt.loaded, '/', evt.total);
        })
        .on('error', cb)
        .send(cb)
    ;
};