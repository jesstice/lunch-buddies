import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {
  editProfile,
  sendInvite,
  removeLunch,
  createUser,
  acceptInvite,
  removeInvite,
  updateAvailability
} from './methods';
import {
  createLunch,
  addLunchBuddy
} from '../lunches/methods';
import { Lunches } from '../lunches/index';

// Schema
const profileSchema = new SimpleSchema({
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
    type: Array,
    label: "Budget"
  },
  'budget.$': { type: String },
  interests: {
    type: Array,
    label: "Interests"
  },
  'interests.$': { type: String },
  cuisines: {
    type: Array,
    label: "Cuisines"
  },
  'cuisines.$': { type: String },
  currentLunch: {
    type: String,
    label: "Current Lunch",
    optional: true
  },
  pendingLunches: {
    type: Array,
    label: "Pending Lunches",
    optional: true
  },
  'pendingLunches.$': { type: String }
});


const usersSchema = new SimpleSchema({
  email: {
    type: String,
    label: "Email"
  },
  password: {
    type: String,
    label: "Password"
  },
  profile: { 
    type: profileSchema 
  },
});
const editSchema = new SimpleSchema({
  fullName: {
    type: String,
    label: "Email"
  },
  phoneNumber: {
    type: String,
    label: "Phone Number"
  },
  interests: {
    type: Array,
    label: "Interests"
  },
  cuisines: {
    type: Array,
    label: "Cuisines"
  },
  budget: {
    type: Array,
    label: "Budget"
  },
  'cuisines.$': { type: String },
  'interests.$': { type: String },
  'budget.$': { type: String }
});


// Publications

// Methods to allow client to access/write to collection
Meteor.methods({

  'users.createUser'(user) {
    if (usersSchema.namedContext('validateUser').validate(user)) {
      createUser(user);
    } else {
      console.log('Validation failed...')
    }
  },

  'users.editProfile'(profileEdits) {
    if (!this.userId ) {
      throw new Meteor.Error(
        'users.editProfile.not-authorized',
        'You are not allowed to update another user\'s profile.'
      )
    }
    if (editSchema.namedContext('validateEdits').validate(profileEdits)) {
      editProfile(profileEdits);
    } else {
      console.log("something went wrong \n", profileEdits);
    }
  },

  'users.sendInvite'({user, invitee}) {
     if (!this.userId ) {
      throw new Meteor.Error(
        'users.sentInvite.not-authorized',
        'You must be logged in to send invite.'
      )
    }
    lunchId = user.profile.currentLunch;
    sendInvite(lunchId, invitee);
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

  'users.acceptInvite'({user, lunchId}) {
    if (!this.userId ) {
      throw new Meteor.Error(
        'users.inviteUser.not-authorized',
        'You must be logged in to invite user.'
      )
    }

    acceptInvite(lunchId);
    addLunchBuddy(user);
  },

  'users.updateAvailability'() {
    if (!this.userId ) {
      throw new Meteor.Error(
        'users.updateAvailability.not-authorized',
        'You must be logged in to update your availability.'
      )
    }

    updateAvailability();
    removeLunch();
  }
});
