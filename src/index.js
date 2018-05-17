import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import './css/defaults.css';
import './css/parallaxNode.css';
import './css/navigation.css';
import './css/header.css';
import './css/contact.css';
import './css/ingest.css';
import './css/footer.css';
import './css/font-extra/font-mfizz.css';

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);
