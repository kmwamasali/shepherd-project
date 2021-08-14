import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import SharedNotes from './SharedNotes';
import NoMatchPage from './NoMatchPage';

function Routes(): JSX.Element {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/shared-notes" component={SharedNotes} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  )
}

export default Routes;