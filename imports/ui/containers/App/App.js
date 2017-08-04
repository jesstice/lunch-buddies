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
import Routes from '../../../startup/client/routes';
import './App.css';
import '../../../../client/main.html';
import Layout from '../../components/Layout/index';

injectTapEventPlugin();
const LunchBuddies = () => (
    
<MuiThemeProvider>
    <Router>
        <Layout>
        <Routes />
        </ Layout>
    </ Router>
</MuiThemeProvider>
);

export default LunchBuddies;


