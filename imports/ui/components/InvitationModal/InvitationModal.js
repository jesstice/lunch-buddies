import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Selector from '../../containers/Selector/';

const styles = {
  button: {
    margin: 12,
  },
  toggle: {
    marginBottom: 16,
  },
};

const InvitationModal = () => {

  return (<Paper style={style} zDepth={3}>
    <div>
      <h2>Availability: </h2>
      <Toggle
        label="Disabled"
        disabled={true}
        style={styles.toggle}
      />
    </div>
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
            href=""
            target="_blank"
            label="Invite"
            secondary={true}
            style={styles.button}
            icon={<i class="fa fa-check" aria-hidden="true"></i>}
          />
          <RaisedButton
            href=""
            target="_blank"
            label="Cancel"
            secondary={true}
            style={styles.button}
            icon={<i class="fa fa-times" aria-hidden="true"></i>}
          />
        </div>
      </li>
    </ul>
  </Paper>);
}

export default InvitationModal;