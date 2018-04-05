require('import-export');
require('babel-core/register')({
    presets: ['env', 'react'],
    plugins: ["transform-class-properties"]
});
const buildPathName = '../build';
const http = require('http');
const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');

const AWS = require('aws-sdk');
const fs = require('fs');

const ReactRender = require('./ReactRender');
const bodyParser = require('body-parser'); //allows for POST requests to read passed parament "body" ex: (req.body)
const staticFiles = [
    '/static/*',
    '/images/*',
    '/logo.svg',
    '/asset-manifest.json',
    '/favicon.ico'
];


const app = express();
app.server = http.createServer(app);
app.use( express.static(buildPathName) );
app.use( bodyParser.json(';') );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( fileUpload() );

staticFiles.forEach( (file) => {
    app.get(file, (req, res) => {
        const filePath = path.join( __dirname, buildPathName, req.url);
        res.sendFile( filePath );
    })
});

let reactRender = new ReactRender( path.join( __dirname, buildPathName, 'index.html') );

//Magic of all react html rendering happens here
app.get('/', reactRender.HTML);

//adding images for upload
app.post('/upload', (req, res, next) => {

    const file      = req.files.file;
    const filename  = req.body.fileName;

    const urlPath = 'images/' + filename;
    const nodePath = `${path.join( __dirname, buildPathName, urlPath)}`;
    console.log(nodePath);

    file.mv(nodePath, function(err) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }

        const secretKey = req.body.secretKey;
        const accessKey = req.body.accessKey;
        const bucketName= req.body.bucketName;

        const S3 = new AWS.S3({
            region: 'us-west-2',
            credentials: {
                accessKeyId: accessKey,
                secretAccessKey: secretKey
            }
        });

        if (file) {
            const s3Params = {
                Body        : fs.createReadStream(nodePath),
                Key         : filename,
                ContentType : file.type,
                Bucket      : bucketName
            };

            S3.putObject( s3Params ).promise()
                .then( (data) => {
                    console.log('UPLOADED!!!');
                    res.json( {file: urlPath} );
                })
                .catch((e) => {
                    console.log(e);
                    console.log('LAME!!!');
                    res.json( {file: urlPath} );
                })
            ;
        }
    });

});

app.server.listen( process.env.PORT || 8080);
console.log( 'listening on http://' + app.server.address().port );