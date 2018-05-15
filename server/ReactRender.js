/**
 * Created by dillo_000 on 4/17/2017.
 */

class ReactRender {

    constructor(_htmlFilePath) {
        this.htmlFilePath = _htmlFilePath;
    }

    HTML = (_request, _response) => {
        const fs = require('fs');
        const react = require('react');
        const reactDomServer = require('react-dom/server');
        const reactRouter = require('react-router');
        const renderToString = reactDomServer.renderToString;
        const match = reactRouter.match;
        const RouterContext = reactRouter.RouterContext;
        const routes = require('../src/routes').default();

        const error = () => {
            _response.status(404).send('404')
        };
        if( !this.htmlFilePath ){
            throw ( 'you didn\'t set path of htmlFilePah with ( __dirname, buildPathName, index.html)' )
        }

        fs.readFile( this.htmlFilePath, 'utf8', (err, htmlData) => {
            if(!err) {
                let locationUrl = _request.url;
                match({routes, location: locationUrl}, (err, redirect, ssrData) => {
                    if(err) {
                        error();
                    } else if(redirect){
                        _response.redirect(302, redirect.pathname + redirect.search);
                    } else if(ssrData){
                        //MAGIC RENDERING!!!
                        const ReactApp = renderToString( react.createElement(RouterContext, ssrData) );
                        const RenderedApp = htmlData.replace('{{SSR}}', ReactApp);
                        _response.status(200).send(RenderedApp);
                    } else {
                        error();
                    }
                })
            } else {
                error();
            }
        });
    }
}

module.exports = ReactRender;
