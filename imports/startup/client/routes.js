
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
// import Public from ...
// import Authenticated from ...

const Routes = () => {
    return ( 
        <Switch>
          <Route exact path="/login" component={Login} /> 
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
           <Route exact path="/profile/:_id" component={Profile} /> 
          {/* <Route exact path="/profile" component={Profile} /> */}
          <Route exact path="/mylunch" component={Lunch} /> 
          <Route component={NotFound} />
          {/* TO DO: replace when sign up configured
          <Public exact path="/login" component={Login} />
          <Public exact path="/signup" component={SignUp} />
          <Authenticated exact path="/" component={Home} />
          <Authenticated exact path="/profile/:_id" component={Profile} />
          <Authenticated component={NotFound} />
          <Authenticated exact path="/mylunch" component={Lunch} />
          */}
        </Switch>
    );
};

export default Routes;
