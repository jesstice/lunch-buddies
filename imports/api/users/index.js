import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {
  editProfile,
  sendInvite,
  removeLunch,
  createUser
} from './methods';
import {
  createLunch,
  addLunchBuddy
} from '../lunches/methods';

// Create a users collection

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

  // "profile.fullName": {type: String},
  // "profile.available": {type: Boolean},
  // "profile.budget": {type: Array, minCount: 1},
  // "profile.budget.$": {type: String},
  // "profile.phoneNumber": {type: String},
  // "profile.available": {type: Boolean},
  // "profile.interests": {type: Array, minCount: 1},
  // "profile.interests.$": {type: String},
  // "profile.cuisines": {type: Array, minCount: 1},
  // "profile.cuisines.$": {type: String},
  // "profile.currentLunch": {type: String, optional: true},
  // "profile.pendingLunches": {type: Array, optional: true},
  // "profile.pendingLunches.$": {type: String, optional: true}

const usersSchema = new SimpleSchema({  // should consider changing this as well;
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


// Publications

// Methods to allow client to access/write to collection
Meteor.methods({

  'users.createUser'(user) {
    if (usersSchema.validate(user)) {
      createUser(user);
    } else {
      console.log('Validation failed...')
      // console.log(usersSchema.getObjectSchema('profile'));
    }
  },

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
