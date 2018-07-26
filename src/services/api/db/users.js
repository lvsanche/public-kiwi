import { db } from '../firebase';

export const postNewUser = (userID, firstName, lastName, email) =>
  db.ref(`users/${userID}`).set({
    userID,
    firstName,
    lastName,
    email
  });

export const postClassToUser = (userID, classID) =>
  db.ref(`users/${userID}/classes/${classID}`).set(true);

export const singleGetUserInfo = (userID) =>
  db.ref(`users/${userID}`).once('value');

export const singleGetAllUsers = () =>
  db.ref('users').once('value');
