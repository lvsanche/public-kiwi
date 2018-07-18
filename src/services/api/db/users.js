import { db } from '../firebase';

export const doCreateUser = (id, firstName, lastName, email) =>
  db.ref(`users/${id}`).set({
    firstName,
    lastName,
    email,
    'classes' : {}
  });

export const doAddClassToUser = (id, classID) =>
  db.ref(`users/${id}/classes/${classID}`).set(true);

export const onceGetUserInfo = (id) =>
  db.ref(`users/${id}`).once('value');

export const onceGetUsers = () =>
  db.ref('users').once('value');
