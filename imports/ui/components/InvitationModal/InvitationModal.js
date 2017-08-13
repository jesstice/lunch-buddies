import React from 'react';
import Dialog from 'material-ui/Dialog';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Selector from '../../containers/Selector/';

import './styles.css';

const InvitationModal = ({handleLunchFlip, handleLunchCreation, handleInvitation}) => {

  return (
    <Dialog open={true}>
      <ul>
        <li>
          <p>Invite buddyName!</p>
          <div>
            <p>Select Your Budget:</p>
          </div>
          <p>Invite sent: 5 mins ago</p>
          <div>
            <RaisedButton
              label="Invite"
              primary
              className="invitationButton"
              icon={<i className="fa fa-check" aria-hidden="true"></i>}
              onTouchTap={()=>{handleInvitation()}}
            />
            <RaisedButton
              label="Create Lunch"
              primary
              className="invitationButton"
              icon={<i className="fa fa-check" aria-hidden="true"></i>}
              onTouchTap={()=>{handleLunchCreation()}}
            />
            <RaisedButton
              label="Cancel"
              secondary
              className="invitationButton"
              icon={<i className="fa fa-times" aria-hidden="true"></i>}
              onTouchTap={()=>{handleLunchFlip()}}
            />
          </div>
        </li>
      </ul>
    </Dialog>
  );
}

export default InvitationModal;