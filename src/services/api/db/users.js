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

<<<<<<< HEAD
export const postCurrentClassToUser = (userID, classID) => 
  db.ref(`users/${userID}/currentClass`).set(classID);

export const singleGetUserInfo = (userID) =>
  db.ref(`users/${userID}`).once('value');

=======
export const singleGetUserInfo = (userID) =>
  db.ref(`users/${userID}`).once('value');

>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
export const singleGetAllUsers = () =>
  db.ref('users').once('value');
