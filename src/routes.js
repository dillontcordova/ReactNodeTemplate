/**
 * Created by dillo_000 on 2/23/2017.
 */
import React from 'react';
import {Router, Route, browserHistory, IndexRedirect, IndexRoute} from 'react-router';
import SiteWrapper from './sections/SiteWrapper';
import HomePage from './pages/HomePage';

const Routes = (props) => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={SiteWrapper}> {/*  <Route path="/" ...  is shown on every page*/}
                <IndexRoute component={HomePage}/> {/* "IndexRoute" is the home page*/}
            </Route>

            <Route path="*"> {/* 404 */}
                <IndexRedirect to="/"/> {/* redirects page to homepage" to='/' " */}
            </Route>
        </Router>
    );
};

export default Routes;