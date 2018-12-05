import { db } from '../firebase';

export const postNewStandard = 
  (standardID, classID, standardName, standardDetails, gradeType, subject ) =>
  db.ref(`standards/${classID}/${standardID}`).set({
    standardID,
    classID,
    standardName,
    standardDetails,
    gradeType,
    subject
  });

export const getAllStandards = ( classID ) => 
  db.ref(`standards/${classID}`).once('value');

export const singleGetStandard = (standardID, classID) =>
  db.ref(`standards/${classID}/${standardID}`).once('value');