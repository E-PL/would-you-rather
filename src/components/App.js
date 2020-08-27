import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateStore } from '../actions/shared';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import NewQuestion from './Newquestion';
import Login from './Login';
import Nav from './Nav';
import Poll from './Poll';
import Notfound from './Notfound';

/**
 * Main component
 *
 * @description The App component loads initial data from the mock API and saves it to the Redux store in an useEffect hook,
 * it checks if the user is logged in and handles routing using react-router.
 * @export App Component
 * @returns Children components
 */
export default function App() {
  // Grab dispatch from react-redux
  const dispatch = useDispatch();


  // Pass dispatch reference to useEffect hook in the dependecy array, useDispatch is memoized, so the hook will run once.
  useEffect(() => {
    // Dispatch the Asynch action that call the mock API and save data to the Redux store
    dispatch(populateStore());
  }, [dispatch]);
  // Subscribe to the store to get the authenticated user, the default value of loggedInUser is null
  const loggedInUser = useSelector((state) => state.loggedInUser);

  return (
    <Router>
      <Nav loggedInUser={loggedInUser} />
      <Switch>
        <Route path="/" exact>
          {loggedInUser ? <Dashboard loggedInUser={loggedInUser} /> : <Login />}
        </Route>
        <Route path="/leaderboard" exact>
          {loggedInUser ? (
            <Leaderboard loggedInUser={loggedInUser} />
          ) : (
            <Login />
          )}
        </Route>
        <Route path="/add" exact>
          {loggedInUser ? (
            <NewQuestion loggedInUser={loggedInUser} />
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
