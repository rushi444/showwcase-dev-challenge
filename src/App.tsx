import React from 'react';
import { Onboard } from './components/Onboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Onboard} />
        </Switch>
      </div>
    </Router>
  );
};
