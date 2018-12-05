import { db } from '../firebase';

export const postNewAssessment = 
<<<<<<< HEAD
  (assessmentID, standardID, standardName, maxGrade, date, classID) =>
  db.ref(`assessments/${classID}/${standardID}/${assessmentID}`).set({
=======
  (assessmentID, standardID, standardName, maxGrade, date) =>
  db.ref(`assessments/${standardID}/${assessmentID}`).set({
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
    assessmentID,
    standardID,
    standardName,
    maxGrade,
    date
  });

<<<<<<< HEAD
export const singleGetAssessment = (standardID, assessmentID, classID) =>
  db.ref(`assessments/${classID}/${standardID}/${assessmentID}`).once('value');

export const getAllAssessments = ( classID ) => 
  db.ref(`assessments/${classID}`).once('value');
=======
export const singleGetAssessment = (standardID, assessmentID) =>
  db.ref(`assessments/${standardID}/${assessmentID}`).once('value');

export const getAllAssessments = ( standardID ) => 
  db.ref(`assessments/${standardID}`).once('value');
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
