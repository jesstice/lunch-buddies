import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  // Use provided profile in options, or create an empty object
   user.profile = options.profile || {};

  // Assigns our custom user profile fields to the newly created user object
   user.profile.fullName = options.fullName;
   user.profile.budget = options.budget;
   user.profile.cusines = options.cuisines;
   user.profile.interests = options.interests;
   user.profile.phoneNumber = options.phoneNumber;

   // Returns the user object
   return user;
});

// Publish user data with fullname, budget, cuisines, interests and phone number
Meteor.publish('userData', () => {
  return Meteor.users.find({}, {fields: {fullName: 1, budget: 1, cuisines: 1, interests: 1, phoneNumber: 1}});
});