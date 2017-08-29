import { Meteor } from 'meteor/meteor';
import { Lunches } from '../../api/lunches/index';
import { Tags } from '../../api/tags/index';

Meteor.publish('users', function(){
  return Meteor.users.find({}, { fields: {"emails.address": 1, profile: 1} });
});

Meteor.publish('lunches', function() {
  return Lunches.find();
})
Meteor.publish('tags', function(){
  return Tags.find();
})