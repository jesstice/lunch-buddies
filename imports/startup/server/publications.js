import { Meteor } from 'meteor/meteor';
import { Lunches } from '../../api/lunches/index';
import { Tags } from '../../api/tags/index';

Meteor.publish('users', function () {
  return Meteor.users.find({}, { fields: { "emails.address": 1, profile: 1 } });
});

Meteor.publish('lunches', function () {
  return Lunches.find();
})
Meteor.publish('tags', function () {
  return Tags.find();
})
Meteor.publish('availables', function () {
  return Meteor.users.find({_id: { $ne: this.userId}, "profile.available": true}, { fields: {"emails.address": 1, profile: 1} });
})
Meteor.publish('mylunches', function(){
  user = Meteor.users.findOne(this.userId);
  return Lunches.find({_id: {$in: user.profile.pendingLunches}})
})
Meteor.publish('currentlunch', function(){
  user = Meteor.users.findOne(this.userId);
  return Lunches.find({_id: user.profile.currentLunch})
})

