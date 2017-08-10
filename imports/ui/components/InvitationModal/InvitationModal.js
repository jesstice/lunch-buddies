import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Selector from '../../containers/Selector/';

import './styles.css';

const InvitationModal = () => {

  return (
    <Paper zDepth={3}>
      <ul>
        <li>
          <p>Invite buddyName!</p>
          <div>
            <p>Select Your Budget:</p>
            <Selector />
          </div>
          <p>Invite sent: 5 mins ago</p>
          <div>
            <RaisedButton
              label="Invite"
              primary
              className="invitationButton"
              icon={<i class="fa fa-check" aria-hidden="true"></i>}
            />
            <RaisedButton
              label="Cancel"
              secondary
              className="invitationButton"
              icon={<i class="fa fa-times" aria-hidden="true"></i>}
            />
          </div>
        </li>
      </ul>
    </Paper>
  );
}

export default InvitationModal;