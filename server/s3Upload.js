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
            KeyId   : 'e7414a88-0ac1-4c2c-96bf-94072033ed78',
            KeySpec : 'AES_256'
        };
        kmsGen( kmsParams, config, (err, kmsData) => {
            if(err){
                const errorMsg = `kmsErr: ${JSON.stringify(err)}`;
                finalResp.error = errorMsg;
                console.log( errorMsg );
                return res.json( finalResp );
            }

            const hash = crypto.createHash('sha1');
            hash.setEncoding('hex');
            fs.createReadStream(nodePath).pipe( hash );

            let encryptStream = fs.createReadStream(nodePath)
                .pipe( crypto.createCipher('aes-256-cbc', kmsData.plainKey) )
            ;
            const s3Params = {
                Key     : filename,
                Body    : encryptStream,
                Bucket  : req.body.bucketName
            };
            s3StreamUpload(s3Params, config, (err, data) => {
                hash.end();
                if(err){
                    const errorMsg = `s3SendErr: ${JSON.stringify(err)}`;
                    finalResp.error = errorMsg;
                    console.log(errorMsg);
                    return res.json( finalResp );
                } else {
                    finalResp.cipherKey = kmsData.cipherKey;
                    finalResp.sha1 = hash.read();
                    console.log(finalResp.sha1);

                    res.json( finalResp );
                }
            });
        });
    });
};