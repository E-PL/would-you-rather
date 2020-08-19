import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateStore } from '../actions/shared';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Nav from './Nav';

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
        <Route
          path="/"
          exact
          component={loggedInUser ? Dashboard : Login}
        ></Route>
      </Switch>
      <footer>footer</footer>
    </Router>
  );
}
