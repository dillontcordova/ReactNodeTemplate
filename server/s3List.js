import {Auth} from "aws-amplify";
import AWS from "aws-sdk";

module.exports = function(req, res, next) {
    Auth.currentCredentials()
        .then((credentials) => {
            const finalResp = {};

            const s3 = new AWS.S3({
                region       : 'us-west-2',
                credentials  : Auth.essentialCredentials(credentials)
            });

            s3.listBuckets({}, (err, data) => {
                if(err){
                    finalResp.error = `s3ListBucketErr: ${JSON.stringify(err)}`;
                    console.error(finalResp.error);
                    return res.json( finalResp );
                }

                finalResp.menuOptions = data.Buckets.map((bucket) => {
                    return bucket.Name;
                });

                return res.json ( finalResp );
            });
        }).catch((e) => {
            console.error(e);
        })
    ;
};