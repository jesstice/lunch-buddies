import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import './styles.css';

const HeaderBar = () => (
  <AppBar
    className="header-bar"
    iconElementLeft={<img className="header-icon home-icon" src={'images/sushi.svg'}/>}
    iconStyleLeft={
      {'marginLeft': 0}
    }
  >
    <Badge
      badgeContent={1}
      secondary={true}
      badgeStyle={{
        top: 30,
        right: 20,
        width: 20,
        height: 20
      }}
    >
      <IconButton
        className="icon-button"
        tooltip="New Invite"
      >
        <img className="badge-icon" src={'images/icecream.svg'}/>
      </IconButton>
    </Badge>
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