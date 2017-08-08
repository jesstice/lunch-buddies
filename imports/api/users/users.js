import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

// Create a users collection
export const Users = new Mongo.Collection('buddies'); // would not allow us to create another users collection;

// Schema
const usersSchema = new SimpleSchema({  // should consider changing this as well;
  fullName: {
    type: String,
    label: "Full Name"
  },
  registeredDate: {
    type: String,
    label: "Registered Date"
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Email"
  },
  phoneNumber: {
    type: String,
    label: "Phone Number"
  },
  available: {
    type: Boolean,
    label: "Available"
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
    type: [Object],
    label: "Current Lunch"
  },
  pendingLunches: {
    type: [Object],
    label: "Pending Lunches"
  }
});

// Publications

// Methods to allow client to access/write to collection
Meteor.methods({
  // user methods
});
