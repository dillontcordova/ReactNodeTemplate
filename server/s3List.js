import AWS from "aws-sdk";

module.exports = function(req, res, next) {
    const finalResp = {};

    let config = {};
    try {
        config = JSON.parse( req.body.config );
    } catch(e) {
        console.error(e);
    }

    const s3 = new AWS.S3( config );

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
};