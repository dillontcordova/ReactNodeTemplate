require('import-export');
require('babel-core/register')({
    presets: ['env', 'react'],
    plugins: ["transform-class-properties"]
});
const buildPathName = '../build';
const http = require('http');
const path = require('path');
const express = require('express');
const ReactRender = require('./ReactRender');
const MailServer = require('./MailServer');
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
app.use(express.static(buildPathName));
app.use( bodyParser.json(';') );

staticFiles.forEach( (file) => {
    app.get(file, (req, res) => {
        const filePath = path.join( __dirname, buildPathName, req.url);
        res.sendFile( filePath );
    })
});


let mail = new MailServer('dillontcordova@gmail.com');
let reactRender = new ReactRender( path.join( __dirname, buildPathName, 'index.html') );

//Magic of all react html rendering happens here
app.get('/', reactRender.HTML);

//adding email system
app.post('/send', mail.send);

app.server.listen( process.env.PORT || 8080);
console.log( 'listening on http://' + app.server.address().port );