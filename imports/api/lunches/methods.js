import { Lunches } from './lunches';
import { Random } from 'meteor/random';
import moment from 'moment';

// LUNCH METHODS

// insert new lunch
export const createLunch = (user, options) => {
  const lunchId = Random.id();
  
  Lunches.insert({
    id: lunchId,
    createdOn: moment().format(), //creates ISO version
    due: moment().add(1, "days").format(),
    budget: options.budget,
    buddies: [user],
    cuisines: [options.cuisines]
  });

  Meteor.users.update(this.userId, {
    $set: {
      "profile.currentLunch": lunchId
    }
  })
}

// update lunch with new buddy
export const addLunchBuddy = (user) => {
  Lunches.find({ id: user.currentLunch }).update({
    $push: {
      buddies: user
    }
  })
}