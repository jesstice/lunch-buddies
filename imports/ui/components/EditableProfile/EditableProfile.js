import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FilterList from '../../containers/FilterList/FilterList';
import './styles.css';


const EditableProfile = ({ updateFullnameField, updatePhoneField, editUserProfile, handleEmail, handlePassword, handleFullname, handlePhone, userData, dispatch }) => {

  const user = Meteor.user();

  return (
    <div className="editProfile">
      <Paper zDepth={3}>
        <div className="cardContainer">
          <div className="formContainer">
            <form onSubmit={(e) => editUserProfile(e.preventDefault())} autoComplete="off">
              <div>
                <TextField value={updateFullnameField} name="Name" hintText={user.profile.fullName} fullWidth label="Name" onChange={(event) => handleFullname(event.target.value)} />
              </div>
              <div>
                <TextField value={updatePhoneField} name="Phone" hintText={user.profile.phoneNumber} fullWidth label="Phone" onChange={(event) => handlePhone(event.target.value)} />
              </div>
              <div>
                <FilterList />
              </div>
              <div className="updateProfileButton">
                <RaisedButton
                  label="Update Profile"
                  primary
                  type="submit">
                </RaisedButton>
              </div>
            </form>
          </div>
        </div>
      </Paper>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    updateFullnameField: state.forms.fullnameField,
    updatePhoneField: state.forms.phoneField,
    interestsFilters: state.filters.interestsFilters,
    cuisineFilters: state.filters.cuisineFilters,
    budgetFilters: state.filters.budgetFilters
  };
}

export default connect(mapStateToProps)(EditableProfile);