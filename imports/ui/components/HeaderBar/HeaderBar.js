import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import { toggleMyInvites } from '../../../../client/redux/modules/invites';

import './styles.css';

const HeaderBar = ({ handleLogout, numberOfInvites, dispatch }) => {
  const userId = Meteor.userId();

  if(userId) {
    return (
      <AppBar
        className="header-bar"
        iconElementLeft={<Link to={'/'}><img className="header-icon home-icon" src={'/images/sushi.svg'}/></Link>}
        iconStyleLeft={
          {'marginLeft': 0}
        }
      >
        <Badge
          badgeContent={!numberOfInvites ? 0 : numberOfInvites.length}
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
            tooltip="My Invites"
            onTouchTap={() => dispatch(toggleMyInvites())}
          >
            <img className="badge-icon" src={'/images/icecream.svg'}/>
          </IconButton>
        </Badge>
        <RaisedButton
          className="header-button"
          label="Profile"
          containerElement={<Link to={`/profile/${userId}`} />}
          labelPosition="before"
          backgroundColor="#a4c639"
          icon={<img className="header-icon" src={'/images/pizza.svg'}/>}
        />
        <RaisedButton
          className="header-button"
          label="Logout"
          backgroundColor="#a4c639"
          onClick={handleLogout}
        />
      </AppBar>
    )
  } else {
    return null;
  }

}

export default HeaderBar;