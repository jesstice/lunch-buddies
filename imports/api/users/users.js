import { Mongo } from 'meteor/mongo';

// Create a users collection
export const Users = new Mongo.Collection('users');

// Schema
Users.schema = new SimpleSchema({
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
    type: [String],
    label: "Interests"
  },
  cuisines: {
    type: [String],
    label: "Cuisines"
  },
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

