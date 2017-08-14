import { Meteor } from 'meteor/meteor';
import { Lunches } from '../../api/lunches/index';

Meteor.publish('users', function(){
  return Meteor.users.find({}, { fields: {"emails.address": 1, profile: 1} });
});

Meteor.publish('lunches', function() {
  return Lunches.find();
})