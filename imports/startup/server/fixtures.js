import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import  moment  from 'moment';
import { Lunches } from '../../api/lunches/';
import { Tags } from '../../api/tags/';

const interests = ['Sports', 'Music', 'Politics', 'Travel', 'Pop Culture', 'World News', 'Fashion', 'Fishing', 'Books', 'Science Fiction', 'Programming', 'Working Out', 'Conspiracy Theories'];
const cuisine = ['Italian', 'Chinese', 'Japanese', 'Thai', 'Burgers & Fries', 'Greek', 'Malaysian', 'Vietnamese', 'Indian', 'Mexican', 'Vegan', 'Vegetarian'];
const budget = ['Under 10', '10 to 20', '20 and higher'];

Meteor.startup(() => {
  let user = {};
  let user1 = {};
  let user2 = {};
  let user3 = {};
  let user4 = {};
  const tags = {
    interests: interests,
    cuisine: cuisine,
    budget: budget
  }

  if( Meteor.users.find().count() === 0 ) {
    user = Accounts.createUser({
      email: 'caramelle@elle.com',
      password: '123456',
      profile: {
        fullName: 'Commissioner Gordon',
        phoneNumber: '035-0365-035-30',
        available: true,
        budget: ['10 to 20'],
        interests: ['Travel', 'Politics'],
        cuisines: ['Italian', 'Chinese', 'Japanese', 'Burgerland'],
        currentLunch: null,
        pendingLunches: []
      }
    });
    user1 = Accounts.createUser({
      email: 'batman@example.com',
      password: '123456',
      profile: {
        fullName: 'Bat Man',
        phoneNumber: '035-789-035-30',
        available: false,
        budget: ['10 to 20'],
        interests: ['Music', 'Pop Culture'],
        cuisines: ['Italian', 'Greek'],
        currentLunch: null,
        pendingLunches: []
      }
    });
    user2 = Accounts.createUser({
      email: 'crablady@example.com',
      password: '123456',
      profile: {
        fullName: 'Crab Lady',
        phoneNumber: '035-789-035-30',
        available: true,
        budget: ['10 to 20'],
        interests: ['Books', 'World News', 'Politics', 'Programming'],
        cuisines: ['Italian', 'Burgers & Fries'],
        currentLunch: null,
        pendingLunches: []
      }
    });
    user3 = Accounts.createUser({
      email: 'totoro@example.com',
      password: '123456',
      profile: {
        fullName: 'Totoro',
        phoneNumber: '035-789-035-30',
        available: false,
        budget: ['20 and higher'],
        interests: ['Fishing', 'Music', 'Programming'],
        cuisines: ['Indian', 'Vietnamese', 'Japanese'],
        currentLunch: null,
        pendingLunches: []
      }
    });
  }

  if (Tags.find().count() === 0) {
    Tags.insert(tags)
  }
});