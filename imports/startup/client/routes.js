
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
import NotFound from '../../ui/components/NotFound/index';

const Routes = () => {
    return ( 
        <Switch>  
          <Route exact path="/login" component={Login} /> 
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
    );
};


export default Routes;

 //<Route exact path="/profile/:id" component={ProfileContainer} />
 //<Route exact path="/" component={Items} />