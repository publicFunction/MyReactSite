import React from 'react';
// import About from './components/About/About';
// import Login from './components/Login/Login';
import Dashboard from './containers/DashboardContainer';
// import Detail from './components/Detail/Detail';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
        <Route exact path="/" component={Dashboard} />
    </Router>
  )
};

export default Routes;
