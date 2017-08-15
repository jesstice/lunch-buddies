import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import NewLunchSelectors from '../../containers/NewLunchSelectors/';

import './styles.css';

const InvitationModal = ({ handleLunchFlip, handleLunchCreation, handleInvitation, inviteeName }) => {
  const user = Meteor.user();
  if (user.profile.currentLunch) {
    return (
      <Dialog open={true}>
        <ul>
          <li>
            <p>You are about to invite <b>{inviteeName}</b></p>
            <div>
              <p>Shall we proceed?</p>
            </div>
            <div>
              <RaisedButton
                label="Invite"
                primary
                className="invitationButton"
                icon={<i className="fa fa-check" aria-hidden="true"></i>}
                onTouchTap={() => { handleInvitation() }}
              />
              <RaisedButton
                label="Cancel"
                secondary
                className="invitationButton"
                icon={<i className="fa fa-times" aria-hidden="true"></i>}
                onTouchTap={() => { handleLunchFlip() }}
              />
            </div>
          </li>
        </ul>
      </Dialog>
    );
  } else {
    return (
      <Dialog open={true}>
        <ul>
          <li>
            <p>You are about to invite <b>{inviteeName}</b></p>
            <div>
              <p>Select budget and cuisine preferences</p>
              <NewLunchSelectors />
            </div>
            <div>
              <RaisedButton
                label="Invite"
                primary
                className="invitationButton"
                icon={<i className="fa fa-check" aria-hidden="true"></i>}
                onTouchTap={() => { handleInvitation() }}
              />
              <RaisedButton
                label="Cancel"
                secondary
                className="invitationButton"
                icon={<i className="fa fa-times" aria-hidden="true"></i>}
                onTouchTap={() => { handleLunchFlip() }}
              />
            </div>
          </li>
        </ul>
      </Dialog>
    );
  }
}

InvitationModal.propTypes = {
  budget_selection: PropTypes.array.isRequired,
  cuisine_selection: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  invitee_fullName: PropTypes.string,
  invitee_id: PropTypes.string,
  showLunch: PropTypes.bool.isRequired
};

export default InvitationModal;