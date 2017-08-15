import { Lunches } from './index';
import { Random } from 'meteor/random';
import { Mongo } from 'meteor/mongo';
import moment from 'moment';

// LUNCH METHODS

// insert new lunch
export const createLunch = ({user_id, options}) => {
  const lunchId = Random.id();
  const cr_time = new Date();
  const due_time = moment().hour(24).format('YYYYMMDDHH');
    Lunches.insert({
      _id: lunchId,
      createdOn: cr_time,
      due: due_time,
      budget: [options.budget],
      buddies: [user_id],
      cuisines: [options.cuisines],
    });

  Meteor.users.update(user_id, {
    $set: {
      "profile.currentLunch": lunchId,
      "profile.available": false
    }
  })
}

// update lunch with new buddy
export const addLunchBuddy = (user) => {
  Lunches.update({ _id: user.profile.currentLunch }, {
    $addToSet: {
      buddies: user._id
    }
  })
}