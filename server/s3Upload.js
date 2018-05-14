import {Auth} from "aws-amplify/lib/index";

const kmsGen            = require('./lib/kmsGen');
const s3StreamUpload    = require('./lib/s3StreamUpload');
const fs                = require('fs');
const crypto            = require('crypto');
const path              = require('path');

module.exports = (buildPathName) => {

    return function (req, res, next) {
        Auth.currentCredentials()
        .then( (credentials) => {
            const awsCreds = Auth.essentialCredentials(credentials);

            const file = req.files.file;
            const filename = req.body.fileName;
            const urlPath = 'images/' + filename;
            const nodePath = path.join(__dirname, buildPathName, urlPath);
            const finalResp = {file: urlPath};
            const config = {
                region: 'us-west-2',
                credentials: {
                    accessKeyId: 'AKIAIWODZN664AUHH2YA',
                    secretAccessKey: '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'
                }
            };

            console.log(awsCreds);

            file.mv(nodePath, function (err) {
                if (err) {
                    console.log(`fileMoveErr: ${JSON.stringify(err)}`);
                    return res.status(500).send(err);
                }

                const kmsParams = {
                    KeyId: 'f8d1ce57-468a-4428-8e92-d4bad7596f1c', //sandboxCognito kms key
                    KeySpec: 'AES_256'
                };
                kmsGen(kmsParams, config, (err, kmsData) => {
                    if (err) {
                        const errorMsg = `kmsErr: ${JSON.stringify(err)}`;
                        finalResp.error = errorMsg;
                        console.log(errorMsg);
                        return res.json(finalResp);
                    }

                    const hash = crypto.createHash('sha1');
                    hash.setEncoding('hex');
                    fs.createReadStream(nodePath).pipe(hash);

                    let encryptStream = fs.createReadStream(nodePath)
                        .pipe(crypto.createCipher('aes-256-cbc', kmsData.plainKey))
                    ;
                    const s3Params = {
                        Key: filename,
                        Body: encryptStream,
                        Bucket: req.body.bucketName
                    };
                    s3StreamUpload(s3Params, config, (err, data) => {
                        hash.end();
                        if (err) {
                            const errorMsg = `s3SendErr: ${JSON.stringify(err)}`;
                            finalResp.error = errorMsg;
                            console.log(errorMsg);
                            return res.json(finalResp);
                        } else {
                            finalResp.cipherKey = kmsData.cipherKey;
                            finalResp.sha1 = hash.read();
                            console.log(finalResp.sha1);

                            res.json(finalResp);
                        }
                    });
                });
            });
        });
    }
};