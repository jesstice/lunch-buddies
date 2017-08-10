import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// import collections
// import { Users } from '../../api/users/';
 import { Lunches } from '../../api/lunches/';

Meteor.startup(() => {
  let user = {};
  let user1 = {};
  let user2 = {};

  if( Meteor.users.find().count() === 0 ) {
    user = Accounts.createUser({
      email: 'caramelle@elle.com',
      password: '123456',
      profile: {
        fullName: 'Kek Pek',
        phoneNumber: '035-0365-035-30',
        available: true,
        budget: '10 to 20',
        interests: ['crab juice', 'dance dance legislation'],
        cuisines: ['Italian', 'Chinese', 'Japanese', 'Burgerland'],
        currentLunch: null,
        pendingLunches: []
      }
    });
        user2 = Accounts.createUser({
      email: 'caramelle@blle.com',
      password: '123456',
      profile: {
        fullName: 'pepe Pek',
        phoneNumber: '035-789-035-30',
        available: true,
        budget: '10 to 20',
        interests: ['some knorkators', 'dance dance legislation'],
        cuisines: ['Italian', 'Burgerland'],
        currentLunch: null,
        pendingLunches: []
      }
    });
            user1 = Accounts.createUser({
      email: 'caramelle@alle.com',
      password: '123456',
      profile: {
        fullName: 'bisha Pek',
        phoneNumber: '035-999-035-30',
        available: true,
        budget: '10 to 20',
        interests: ['dance dance legislation'],
        cuisines: ['Chinese', 'Burgerland'],
        currentLunch: null,
        pendingLunches: []
      }
    });
  }
});