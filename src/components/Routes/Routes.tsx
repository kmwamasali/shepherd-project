import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import SharedNotes from '../SharedNotes/SharedNotes';
import NoMatchPage from '../NoMatchPage/NoMatchPage';

function Routes() {
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