import React, { Component } from 'react';
import InvitationalModal from '../../components/InvitationModal/';
import { connect } from 'react-redux';
import { flipCreateLunchModal } from '../../../../client/redux/modules/lunch';
import PropTypes from 'prop-types';


class InvitationalModalContainer extends Component {
  handleInvitation = () => { //check mycurrentlunch, if null > handleLunchCreation, otherwise push current lunch id into pending lunches of invitee;
    const user = Meteor.user();
    const user_id = Meteor.userId();
    const invitee = this.props.invitee_id;
    //if user has currentLunch => invite invitee to that lunch, if user does not have current lunch, create new lunch;
    if (user.profile.currentLunch) {
      Meteor.call('users.sendInvite', { user, invitee }, (error) => {
        if (error) {
          console.log(error.reason);
        } else {
          this.props.dispatch(flipCreateLunchModal());
        }
      })
    } else {
      this.handleLunchCreation();
    }
  }
  handleLunchCreation = () => {
    const user_id = Meteor.userId();
    const options = { // composing as object for schema checking server side
      budget: this.props.budget_selection, //budget form
      buddies: [user_id], //storing my id
      cuisines: this.props.cuisine_selection //cuisines form
    }
    //also need invitee;
    if (options.budget.length > 0 && user_id && options.cuisines.length > 0) {
      Meteor.call('lunches.createLunch', { user_id, options }, (error) => {
        if (error) {
          console.log("There was an error: " + error.reason);
        } else {
          this.handleInvitation();// this.props.history.push('/')
        }
      }
      )
    } else {
      this.props.dispatch(flipCreateLunchModal());
      alert('you have to select some preferences for your lunch!')
    }
  }
  handleLunchFlip = () => {
    this.props.dispatch(flipCreateLunchModal());
  }
  render() {
    if (this.props.showLunch) {
      return (

        <InvitationalModal handleLunchCreation={this.handleLunchCreation}
          handleLunchFlip={this.handleLunchFlip}
          handleInvitation={this.handleInvitation}
          inviteeName={this.props.invitee_fullname}

        />

      )
    } else {
      return null
    }
  }
}

function mapStateToProps(state) {
  return {
    showLunch: state.lunch.showLunchInvitation,
    invitee_id: state.lunch.invitee_id,
    invitee_fullname: state.lunch.invitee_fullName,
    budget_selection: state.lunch.budget_selection,
    cuisine_selection: state.lunch.cuisine_selection
  }
}
export default connect(mapStateToProps)(InvitationalModalContainer);

InvitationalModalContainer.propTypes = {
  budget_selection: PropTypes.array.isRequired,
  cuisine_selection: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  invitee_fullName: PropTypes.string,
  invitee_id: PropTypes.string,
  showLunch: PropTypes.bool.isRequired
};