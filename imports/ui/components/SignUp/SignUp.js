import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from 'grommet/components/LoginForm';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Selector from '../../containers/Selector/index';
import FilterList from '../../components/FilterList/FilterList';
import './styles.css';


const SignUp = ({ handleSignUp, handleEmail, handlePassword, handleFullname,  handlePhone }) => {

  // const interests = ['sports', 'crab juice', 'fishing', 'dance dance legislation'];
  // const cuisine = ['Italian', 'Chinese', 'Japanese', 'Thai', 'Burgerland'];
  // const budget = ['Under 10$', '10$ to 20$', '20$ and higher'];

  return (
    <div className="signup">
      <Paper zDepth={3}>
        <div className="cardContainer">
          <div className="formContainer">
            <form onSubmit={handleSignUp} autoComplete="off">
              <div>
                <TextField name="Name" hintText="What's your name?" fullWidth label="Name" onChange={handleFullname}/>
              </div>
              <div>
                <TextField name="Phone" hintText="Phone number" fullWidth label="Phone" onChange={handlePhone}/>
              </div>
              <div>
                <TextField name="Email" hintText="Email" fullWidth type="email" label="Email" onChange={handleEmail}/>
              </div>
              <div>
                <TextField name="Password" hintText="Password" fullWidth type="password" label="Password" onChange={handlePassword}/>
              </div>
              <div>
                <FilterList />
              </div>
              <RaisedButton className="enterButton" primary fullWidth type="submit">
                Sign Up
              </RaisedButton>
              <Link to={'/login'} className="cancel">
                <p>Cancel</p>
              </Link>
            </form>
          </div>
        </div>
      </Paper>
    </div>
  )
};

export default SignUp;