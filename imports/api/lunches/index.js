import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import {
  createLunch
} from './methods';
// import userSchema from '../users/users'; //use user from userSchema as an element of Buddies array;

//create new collection for lunches
export const Lunches = new Mongo.Collection('lunches');
Meteor.methods({

  'lunches.createLunch'({user, options}) {
     if (lunchSchema.namedContext('validateLunch').validate(options)) {
      createLunch({user, options});
     } else {
       console.log('Validation fail')
     }
    }
  }
);

//set up schema
lunchSchema = new SimpleSchema({
  buddies: {
    type: Array ,
    label: "Buddies"
  },
  "buddies.$": { type: String },
  budget: {
    type: Array,
    label: "Budget"
  },
  "budget.$": { type: String },
  cuisines: {
    type: Array,
    label: "Cuisines"
  },
  "cuisines.$": { type: String }
});