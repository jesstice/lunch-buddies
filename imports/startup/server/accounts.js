import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  // Use provided profile in options, or create an empty object
   user.profile = profile || {};

  // Assigns our custom user profile fields to the newly created user object
   user.profile.fullName = profile.fullName;
   user.profile.budget = profile.budget;
   user.profile.cusines = profile.cuisines;
   user.profile.interests = profile.interests;
   user.profile.phoneNumber = profile.phoneNumber;
   user.profile.currentLunch = profile.currentLunch;
   user.profile.pendingLunches = profile.pendingLunches;
   user.profile.available = profile.available;

   // Returns the user object
   return user;
});

// Publish user data with fullname, budget, cuisines, interests and phone number
// Meteor.publish('userData', () => {
//   return Meteor.users.find({}, {fields: {fullName: 1, budget: 1, cuisines: 1, interests: 1, phoneNumber: 1}});
// });