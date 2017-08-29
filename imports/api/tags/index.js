import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import {createTags} from './methods';

export const Tags = new Mongo.Collection('tags');
Meteor.methods({
    'tags.createTags'(tags) {
       if (tagsSchema.namedContext('validateTags').validate(tags)) {
        createTags({interests, cuisines, budget});
       } else {
         console.log('Validation fail')
       }
      }
    }
  );

const tagsSchema = new SimpleSchema({
  interests: {
    type: Array ,
    label: "interests"
  },
  "interests.$": { type: String },
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