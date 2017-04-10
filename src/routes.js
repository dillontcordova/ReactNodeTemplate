/**
 * Created by dillo_000 on 2/23/2017.
 */
import React from 'react';
import {Router, Route, browserHistory, IndexRedirect/*, IndexRoute*/} from 'react-router';
import PageLayout from './scrollWebsite/PageLayout';

const Routes = (props) => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={PageLayout}> {/* Page specified by "Route" and "path" */}
                {/*<IndexRoute component={App}/> /!* Directive specified by "IndexRoute" *!/*/}
                {/*<Route path="/custom" component={Custom}/>*/}
            </Route>

            <Route path="*"> {/* 404..when no other route is met, it enters here specified by "*" */}
                <IndexRedirect to="/"/> {/* redirects page to home page specified by " to='/' " */}
            </Route>
        </Router>
    );
};

export default Routes;