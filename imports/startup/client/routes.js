
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';
import Login from '../../ui/containers/Login/index';
import SignUp from '../../ui/containers/SignUp/index';
import Home from '../../ui/containers/Home/index';
import Profile from '../../ui/containers/Profile/index';
import Lunch from '../../ui/containers/Lunch/index';
import NotFound from '../../ui/components/NotFound/index';
import Authenticated from '../../ui/components/Authenticated/';

const Routes = () => {
  const loggedIn = Meteor.userId();
  return (
    <Switch>
      <Route exact path="/login" render={() => loggedIn ? (<Redirect to={`/profile/${loggedIn}`} />) : <Login />} />
      <Route exact path="/signup" render={() => loggedIn ? (<Redirect to={`/profile/${loggedIn}`} />) : <SignUp />} />
      <Authenticated exact path="/" component={Home} />
      <Authenticated exact path="/profile/:_id" component={Profile} />
      <Authenticated exact path="/mylunch" component={Lunch} />
      <Authenticated component={NotFound} />
    </Switch>
  );
};

export default Routes;
