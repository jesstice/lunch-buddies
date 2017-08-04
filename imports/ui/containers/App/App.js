import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../../containers/Login/Login.js'
import './App.css';
import SignUp from '../../components/SignUp/SignUp';
import '../../../../client/main.html';


injectTapEventPlugin();
const LunchBuddies = () => (
    
<MuiThemeProvider>

        <SignUp />

</MuiThemeProvider>
);

export default LunchBuddies;


