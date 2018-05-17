require( 'import-export' );
require( 'babel-core/register' )({
    presets: ['env', 'react'],
    plugins: ["transform-class-properties"]
});
const buildPathName = '../build';
const http          = require('http');
const path          = require('path');
const express       = require('express');
const fileUpload    = require('express-fileupload');

const ReactRender   = require('./ReactRender');
const s3Upload      = require('./s3Upload');
const s3List        = require('./s3List');

const bodyParser    = require('body-parser'); //allows for POST requests to read passed parameter "body" ex: (req.body)
const port          = process.env.PORT || 8080;
const staticFiles   = [
    '/static/*',
    '/images/*',
    '/asset-manifest.json',
    '/favicon.ico'
];

const app   = express();
app.server  = http.createServer(app);
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

//uploading streamed files to an s3 bucket
app.post('/upload', s3Upload(buildPathName));

//getting a list of all s3 buckets for this user
app.post('/listBuckets', s3List);

app.server.listen( port );
console.log( 'listening on http://' + app.server.address().port );