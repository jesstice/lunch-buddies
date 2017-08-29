import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Tags } from './index';

export const createTags = ({interests, cuisines, budget}) => {
  Tags.insert({
    interests: interests,
    cuisines: cuisines,
    budget: budget
  })
}