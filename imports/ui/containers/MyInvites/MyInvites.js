import React from 'react';
import { connect } from 'react-redux';

import LunchInvites from '../../components/LunchInvites/LunchInvites';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Loader from '../../components/Loader/';

const MyInvites = ({ openStatus, lunchData, userData, loading }) => {

  return (
    <Drawer
    width={300}
    openSecondary={true}
    open={openStatus}
    >
      <AppBar
        className="invitesTitle"
        title="My Invites"
        showMenuIconButton={false}
      />
      {(loading) ?
        <Loader />
      :
        <LunchInvites
          userData={userData}
          lunchData={lunchData}
        />
      }
    </Drawer>
  );

}

export default MyInvites;