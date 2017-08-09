import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from '../../../../client/redux/store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import muiTheme from '../../config/theme';
import Routes from '../../../startup/client/routes';
import './App.css';
import '../../../../client/main.html';
import Layout from '../../components/Layout/index';

injectTapEventPlugin();

const LunchBuddies = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router>
          <Layout>
            <Routes />
          </ Layout>
      </ Router>
    </Provider>
  </MuiThemeProvider>
);

export default LunchBuddies;
