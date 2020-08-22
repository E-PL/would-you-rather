import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateStore } from '../actions/shared';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Nav from './Nav';
import Poll from './Poll';
import Notfound from './Notfound';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateStore());
  }, [dispatch]);

  const loggedInUser = useSelector((state) => state.loggedInUser);

  return (
    <Router>
      <Nav loggedInUser={loggedInUser} />
      <Switch>
        <Route path="/" exact>
          {loggedInUser ? <Dashboard loggedInUser={loggedInUser} /> : <Login />}
        </Route>
        <Route path="/leaderboard/" exact>
          {loggedInUser ? (
            <Leaderboard loggedInUser={loggedInUser} />
          ) : (
            <Login />
          )}
        </Route>
        <Route path="/questions/">
          {loggedInUser ? <Poll loggedInUser={loggedInUser} /> : <Login />}
        </Route>

        <Route path="*" component={Notfound} />
      </Switch>
      <footer>footer</footer>
    </Router>
  );
}
