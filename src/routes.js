/**
 * Created by dillo_000 on 2/23/2017.
 */
import React from 'react';
import {Router, Route, browserHistory, IndexRedirect, IndexRoute} from 'react-router';
import SiteWrapper from './scrollWebsite/SiteWrapper';
import PageLayout from './scrollWebsite/PageLayout';

const Routes = (props) => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={SiteWrapper}> {/*  <Route path="/" ...  is shown on every page*/}
                <IndexRoute component={PageLayout}/> {/* "IndexRoute" is the home page*/}
                {/*<Route path="/custom" component={Custom}/>*/}
            </Route>

            <Route path="*"> {/* 404..when no other route is met, it enters here specified by "*" */}
                <IndexRedirect to="/"/> {/* redirects page to home page specified by " to='/' " */}
            </Route>
        </Router>
    );
};

export default Routes;