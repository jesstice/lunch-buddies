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
import Layout from '../../components/Layout';
import Login from '../../containers/Login/Login.js'
import './App.css';
import SignUp from '../../components/SignUp/SignUp';
import FilterList from '../../components/FilterList/FilterList';
import BuddyListItem from '../../components/BuddyListItem/BuddyListItem';
import muiTheme from '../../config/theme';
import '../../../../client/main.html';


injectTapEventPlugin();
const LunchBuddies = () => (
    
<MuiThemeProvider muiTheme={muiTheme}>
  {/* <Layout>
  </Layout> */}
  <BuddyListItem />
        {/* <SignUp /> */}

</MuiThemeProvider>
);

export default LunchBuddies;


