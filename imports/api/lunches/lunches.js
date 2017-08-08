import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
// import userSchema from '../users/users'; //use user from userSchema as an element of Buddies array;

//create new collection for lunches
export const Lunches = new Mongo.Collection('lunches');

//set up schema
lunchSchema = new SimpleSchema({
  createdon: {type: Date},
  due: String,
  buddies: {
    type: [userSchema],
    min: 1,
    label: "Buddies"
  },
  budget: {
    type: String,
    label: "Budget"
  },
  interests: {
    type: [String],
    label: "Interests"
  },
  cuisines: {
    type: [String],
    label: "Cuisines"
  },

});