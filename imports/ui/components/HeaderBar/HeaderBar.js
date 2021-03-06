import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import './styles.css';

const HeaderBar = ({ handleLogout, numberOfInvites, dispatch, toggleOpenMyInvites }) => {
  const userId = Meteor.userId();
  const user = Meteor.user();

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
            onTouchTap={() => toggleOpenMyInvites()}
          >
            <img className="badge-icon" src={'/images/icecream.svg'}/>
          </IconButton>
        </Badge>
        {(user.profile.currentLunch) ?
        <RaisedButton
          className="header-button"
          label="My Lunch"
          containerElement={<Link to={'/mylunch'} />}
          labelPosition="before"
          backgroundColor="#a4c639"
          icon={<img className="header-icon" src={'/images/burger.svg'}/>}
        />
        :null}
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
          onClick={() => handleLogout()}
        />
      </AppBar>
    )
  } else {
    return null;
  }
}

HeaderBar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  numberOfInvites: PropTypes.array.isRequired,
  toggleOpenMyInvites: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default HeaderBar;