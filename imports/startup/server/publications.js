import { Meteor } from 'meteor/meteor';

Meteor.publish('users', function(){
  return Meteor.users.find({}, { fields: {"emails.address": 1, profile: 1} });
});

Meteor.publish('lunches', function() {
  return Lunches.find({}, {fields: { "id": 1 }});
})