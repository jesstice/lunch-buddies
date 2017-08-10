import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from 'grommet/components/LoginForm';
import './styles.css';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Selector from '../../containers/Selector/index';



const SignUp = () => {
  const interests = ['sports', 'crab juice', 'fishing', 'dance dance legislation'];
  const cuisine = ['Italian', 'Chinese', 'Japanese', 'Thai', 'Burgerland'];
  const budget = ['Under 10$', '10$ to 20$', '20$ and higher'];
  return (
    <div className="signup">
      <Paper zDepth={5}>
        <div className="cardContainer">
          <div className="formContainer">
            <form autoComplete="off">
              <div>
                <TextField name="Name" hintText="What's your name?" fullWidth label="Name" />
              </div>
              <div>
                <TextField name="Phone" hintText="Phone number" fullWidth label="Phone" />
              </div>
              <div>
                <TextField name="Email" hintText="Email" fullWidth type="email" label="Email" />
              </div>
              <div>
                <TextField name="Password" hintText="Password" fullWidth type="password" label="Password" />
              </div>
              <div>
                <Selector arr={interests} /><Selector arr={cuisine} /><Selector arr={budget} />
              </div>
              <RaisedButton className="enterButton" primary fullWidth type="submit">
                Enter
                                    </RaisedButton>
            </form>
          </div>
        </div>
      </Paper>

    </div>
  )
};

export default SignUp;