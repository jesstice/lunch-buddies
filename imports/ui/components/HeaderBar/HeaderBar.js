import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import './styles.css';

const HeaderBar = () => (
  <AppBar
    className="header-bar"
    iconElementLeft={<img className="header-icon" src={'images/sushi.svg'}/>}
  >
    <RaisedButton
      className="header-button"
      label="Invites"
      labelPosition="before"
      backgroundColor="#a4c639"
      icon={<img className="header-icon" src={'images/taco.svg'}/>}
    />
    <RaisedButton
      className="header-button"
      label="Profile"
      labelPosition="before"
      backgroundColor="#a4c639"
      icon={<img className="header-icon" src={'images/pizza.svg'}/>}
    />
    <RaisedButton
      className="header-button"
      label="Logout"
      backgroundColor="#a4c639"
    />
  </AppBar>
);

export default HeaderBar;