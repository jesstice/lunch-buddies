import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const style = {
  margin: 12,
};

const HeaderBar = () => (
  <AppBar>
    <RaisedButton
      backgroundColor="#a4c639"
      icon={<FontIcon className="material-icons" />}
      style={style}
    />
    <RaisedButton
      backgroundColor="#a4c639"
      icon={<FontIcon className="material-icons" />}
      style={style}
    />
    <RaisedButton
      label="Profile"
      backgroundColor="#a4c639"
      icon={<FontIcon className="material-icons" />}
      style={style}
    />
    <RaisedButton
      label="Logout"
      backgroundColor="#a4c639"
      style={style}
    />
  </AppBar>
);

export default HeaderBar;