import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import LunchBuddies from '../imports/ui/containers/App/App';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';

import React from 'react';
import './main.html';


Meteor.startup(() => {
  ReactDOM.render(<LunchBuddies />, document.getElementById('root'));
});