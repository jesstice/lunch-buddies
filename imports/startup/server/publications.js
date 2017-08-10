import { Meteor } from 'meteor/meteor';

Meteor.publish('users', function(){
  return Meteor.users.find({}, { fields: {email: 1, profile: 1} });
});