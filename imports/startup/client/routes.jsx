import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '../../ui/layouts/appLayout.jsx';
import Index from '../../ui/pages/index.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
        <IndexRoute component={ Index } />
    </Route>
  </Router>
);
