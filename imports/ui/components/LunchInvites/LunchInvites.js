import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12,
  },
  toggle: {
    marginBottom: 16,
  },
};

const ViewLunch = () => (
  <RaisedButton
    label="View Lunch"
    primary={true}
    style={style}
  />
)

const LunchInvites = () => {

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
        <p>someUser and friends would like to be your lunch buddy!</p>
        <p>Budget: $$</p>
        <p>Invite sent: 5 mins ago</p>
        <div>
          <RaisedButton
            href=""
            target="_blank"
            label="Accept"
            secondary={true}
            style={styles.button}
            icon={<i class="fa fa-check" aria-hidden="true"></i>}
          />
          <RaisedButton
            href=""
            target="_blank"
            label="Decline"
            secondary={true}
            style={styles.button}
            icon={<i class="fa fa-times" aria-hidden="true"></i>}
          />
        </div>
      </li>
    </ul>
  </Paper>);
}

export default LunchInvites;