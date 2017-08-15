import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import  moment  from 'moment';
// import collections
// import { Users } from '../../api/users/';
 import { Lunches } from '../../api/lunches/';

Meteor.startup(() => {
  let user = {};
  let user1 = {};
  let user2 = {};
  let user3 = {};
  let user4 = {};

  if( Meteor.users.find().count() === 0 ) {
    user = Accounts.createUser({
      email: 'caramelle@elle.com',
      password: '123456',
      profile: {
        fullName: 'Commissioner Gordon',
        phoneNumber: '035-0365-035-30',
        available: true,
        budget: ['10 to 20'],
        interests: ['crab juice', 'dance dance legislation'],
        cuisines: ['Italian', 'Chinese', 'Japanese', 'Burgerland'],
        currentLunch: null,
        pendingLunches: []
      }
    });
    user1 = Accounts.createUser({
      email: 'beba@batman.com',
      password: '123456',
      profile: {
        fullName: 'Crab Person',
        phoneNumber: '035-789-035-30',
        available: false,
        budget: ['10 to 20'],
        interests: ['some knorkators', 'dance dance legislation'],
        cuisines: ['Italian', 'Burgerland'],
        currentLunch: null,
        pendingLunches: []
      }
    });
    user2 = Accounts.createUser({
      email: 'crabpersonisadouche@batman.com',
      password: '123456',
      profile: {
        fullName: 'Crab Lady',
        phoneNumber: '035-789-035-30',
        available: true,
        budget: ['10 to 20'],
        interests: ['some knorkators', 'dance dance legislation', 'Politics'],
        cuisines: ['Italian', 'Burgerland'],
        currentLunch: null,
        pendingLunches: []
      }
    });
    user3 = Accounts.createUser({
      email: 'benAffleck@batman.com',
      password: '123456',
      profile: {
        fullName: 'Ben Affleck',
        phoneNumber: '035-789-035-30',
        available: false,
        budget: ['10 to 20'],
        interests: ['some knorkators', 'dance dance legislation'],
        cuisines: ['Italian', 'Burgerland'],
        currentLunch: null,
        pendingLunches: []
      }
    });
    user4 = Accounts.createUser({
      email: 'clientqualitycontrol@batman.com',
      password: '123456',
      profile: {
        fullName: 'Alfred Sauce',
        phoneNumber: '035-789-035-30',
        available: true,
        budget: ['under 10'],
        interests: ['some knorkators', 'dance dance legislation'],
        cuisines: ['Italian', 'Burgerland'],
        currentLunch: null,
        pendingLunches: []
      }
    });
  }

  // if(Lunches.find().count() === 0) {
  //   const cr_time = new Date();
  //   const due_time = moment().hour(24).format('YYYYMMDDHH');
  //   Lunches.insert({
  //     createdOn: cr_time,
  //     due: due_time,
  //     buddies: ['MEZRiMghQqAMZaP68'],
  //     budget: '10 to 20',
  //     cuisines: ['Chinese', 'Burgerland']
  //   })
  // }
});