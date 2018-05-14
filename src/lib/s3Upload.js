import {Auth} from "aws-amplify/lib/index";

const kmsGen            = require('../../server/lib/kmsGen');
const s3StreamUpload    = require('../../server/lib/s3StreamUpload');
const fs                = require('fs');

const crypto            = require('crypto');


module.exports = function (file, callback){

    Auth.currentCredentials()
        .then(credentials => {
            const awsCreds = Auth.essentialCredentials(credentials);

            const finalResp = {};

            const kmsParams = {
                KeyId: 'fa9c167c-db70-4da2-addf-5ad929c57025', //sandboxCognito kms key
                KeySpec: 'AES_256'
            };

            const config = {
                region: 'us-west-2',
                credentials: awsCreds
            };

            kmsGen(kmsParams, config, (err, kmsData) => {
                if (err) {
                    const errorMsg = `kmsErr: ${JSON.stringify(err)}`;
                    finalResp.error = errorMsg;
                    console.log(errorMsg);
                    return callback(finalResp);
                }

                const hash = crypto.createHash('sha1');
                const _ = hash._writableState;
                // hash.setEncoding('hex');


                fs.createReadStream(file).pipe(hash);

                let encryptStream = fs.createReadStream(file)
                    .pipe(crypto.createCipher('aes-256-cbc', kmsData.plainKey))
                ;

                const s3Params = {
                    Key     : 'NAME.jpg',
                    Body    : encryptStream,
                    Bucket  : 'cn-dmz-untrusted'
                };

                s3StreamUpload(s3Params, config, (err, data) => {
                    hash.end();
                    if (err) {
                        const errorMsg = `s3SendErr: ${JSON.stringify(err)}`;
                        finalResp.error = errorMsg;
                        console.log(errorMsg);
                        return callback(finalResp);
                    } else {
                        finalResp.cipherKey = kmsData.cipherKey;
                        finalResp.sha1 = hash.read();
                        console.log(finalResp.sha1);

                        return callback(finalResp);
                    }
                });
            });
        })
    ;
};