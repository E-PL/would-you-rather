import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateStore } from '../actions/shared';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Nav from './Nav';
import Poll from './Poll'

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
      <Route path="/questions/">
           { loggedInUser ? <Poll loggedInUser={loggedInUser} /> : <Login/>}
          </Route>
        {loggedInUser ? (
          <Route path="/" exact>
            <Dashboard loggedInUser={loggedInUser} />
          </Route>
        ) : (
          <Route path="/" exact>
            <Login />
          </Route>
        )}
      </Switch>
      <footer>footer</footer>
    </Router>
  );
}
