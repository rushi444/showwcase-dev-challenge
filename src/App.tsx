import React from 'react';
import { Onboard } from './components/Onboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';

export const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Onboard} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

