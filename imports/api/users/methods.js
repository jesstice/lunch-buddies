import { Mongo } from 'meteor/mongo';

// insert new user
export const createUser = (user) => {
  Accounts.createUser({
    email: user.email,
    password: user.password,
    profile: user.profile
  })
}

// update user profile
export const editProfile = (edits) => {
  Meteor.users.update(this.userId, {
    $set: {
      "profile.fullName": edits.fullName,
      "profile.phoneNumber": edits.phoneNumber,
      "profile.budget": edits.budget,
      "profile.interests": edits.interests,
      "profile.cuisines": edits.cuisines
    }
  })
}

// update buddy pending lunch
export const sendInvite = (user, inviteeId) => {
  Meteor.users.update(inviteeId, {
    $push: {
      pendingLunches: user.currentLunch
    }
  })
}

// remove user current lunch
export const removeLunch = () => {
  Meteor.users.update(this.userId, {
    $set: {
      "profile.currentLunch": null
    }
  })
}

// remove invite from pending lunch
export const removeInvite = (lunchId) => {
  Meteor.users.update(this.userId, {
    $pull: {
      "profile.pendingLunches": { $eq: lunchId }
    }
  })
}

// update pending and current lunch
export const acceptInvite = (lunchId) => {
  Meteor.users.update(this.userId, {
    $pull: {
      "profile.pendingLunches": { $eq: lunchId }
    },
    $set: {
      "profile.currentLunch": lunchId
    }
  })
}