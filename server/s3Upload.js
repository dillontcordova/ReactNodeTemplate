const kmsGen            = require('./lib/kmsGen');
const s3StreamUpload    = require('./lib/s3StreamUpload');
const fs                = require('fs');
const crypto            = require('crypto');
const path              = require('path');

module.exports = (buildPathName) => function( req, res, next ){

    const file      = req.files.file;
    const filename  = req.body.fileName;
    const urlPath   = 'images/' + filename;
    const nodePath  = path.join( __dirname, buildPathName, urlPath);
    const finalResp = {file: urlPath};
    const config    = {
        region      : 'us-west-2',
        credentials : {
            accessKeyId     : req.body.accessKey,
            secretAccessKey : req.body.secretKey
        }
    };

    file.mv(nodePath, function(err) {
        if (err) {
            console.log(`fileMoveErr: ${JSON.stringify(err)}`);
            return res.status(500).send(err);
        }

        const kmsParams = {
            KeyId   : '165fd149-9cf5-41be-9b82-9bab31a50995',
            KeySpec : 'AES_256'
        };
        kmsGen( kmsParams, config, (err, kmsData) => {
            if(err){
                console.log(`kmsErr: ${JSON.stringify(err)}`);
                res.json( finalResp );
            }

            let readStream = fs.createReadStream(nodePath)
                .pipe( crypto.createCipher('aes-256-cbc', kmsData.plainKey) )
            ;
            const s3Params = {
                Key     : filename,
                Body    : readStream,
                Bucket  : req.body.bucketName
            };
            s3StreamUpload(s3Params, config, (err, data) => {
                if(err){
                    console.log(`s3SendErr: ${JSON.stringify(err)}`);
                    res.json( finalResp );
                } else {
                    console.log(data);
                    finalResp.cipherKey = kmsData.cipherKey;
                    res.json( finalResp );
                }
            });
        });
    });
};