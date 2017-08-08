import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// import collections
// import { Users } from '../../api/users/';
 import { Lunches } from '../../api/lunches/';

Meteor.startup(() => {
  let user = {};
  if( Meteor.users.find().count() === 0 ) {
    user = Accounts.createUser({
      email: 'caramelle@elle.com',
      password: '123456',
      fullName: "Kek Pek",
      phoneNumber: "035-0365-035-30",
      available: true,
      budget: "10 to 20",
      interests: ['crab juice', 'dance dance legislation'],
      cuisines: ['Italian', 'Chinese', 'Japanese', 'Burgerland'],
      currentLunch: null,
      pendingLunches: []
    });
  }
});