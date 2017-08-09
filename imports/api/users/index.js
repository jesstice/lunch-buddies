import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {
  editProfile,
  sendInvite,
  removeLunch
} from './methods';
import {
  createLunch,
  addLunchBuddy
} from '../lunches/methods';

// Create a users collection
// export const Users = new Mongo.Collection('buddies'); // would not allow us to create another users collection;

// Schema
const usersSchema = new SimpleSchema({  // should consider changing this as well;
  fullName: {
    type: String,
    label: "Full Name"
  },
  phoneNumber: {
    type: String,
    label: "Phone Number"
  },
  available: {
    type: Boolean,
    label: "Available",
    defaultValue: true
  },
  budget: {
    type: String,
    label: "Budget"
  },
  interests: {
    type: { type: Array },
    label: "Interests"
  },
  'interests.$': { type: String },
  cuisines: {
    type: { type: Array },
    label: "Cuisines"
  },
  'cuisines.$': { type: String },
  currentLunch: {
    type: { type: Array },
    label: "Current Lunch"
  },
  'currentLunch.$': { type: Object },
  pendingLunches: {
    type: { type: Array },
    label: "Pending Lunches",
  },
  'pendingLunches.$': { type: Object }

});

// Publications

// Methods to allow client to access/write to collection
Meteor.methods({

  'users.editProfile'(profileEdits) {
    if (!this.userId ) {
      throw new Meteor.Error(
        'users.editProfile.not-authorized',
        'You are not allowed to update another user\'s profile.'
      )
    }

    if (usersSchema.validate(profileEdits)) {
      editProfile(profileEdits);
    } else {
      console.log('Validation failed...');
    }

  },

  'users.sendInvite'(user, inviteeId) {
     if (!this.userId ) {
      throw new Meteor.Error(
        'users.sentInvite.not-authorized',
        'You must be logged in to send invite.'
      )
    }

    sendInvite(user, inviteeId);
  },

  'users.inviteUser'(user, options) {
     if (!this.userId ) {
      throw new Meteor.Error(
        'users.inviteUser.not-authorized',
        'You must be logged in to invite user.'
      )
    }

    createLunch(user, options);
    sendInvite(user, options.invitee);
  },

  'users.removeLunch'() {
    if (!this.userId ) {
      throw new Meteor.Error(
        'users.inviteUser.not-authorized',
        'You must be logged in to invite user.'
      )
    }

    removeLunch();
  },

  'users.removeInvite'(lunchId) {
    if (!this.userId ) {
      throw new Meteor.Error(
        'users.inviteUser.not-authorized',
        'You must be logged in to invite user.'
      )
    }

    removeInvite(lunchId);
  },

  'users.acceptInvite'(user, lunchId) {
    if (!this.userId ) {
      throw new Meteor.Error(
        'users.inviteUser.not-authorized',
        'You must be logged in to invite user.'
      )
    }

    acceptInvite(lunchId);
    addLunchBuddy(user);
  }
});
