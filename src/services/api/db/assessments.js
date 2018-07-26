import { db } from '../firebase';

export const postNewAssessment = 
  (assessmentID, standardID, standardName, maxGrade, date) =>
  db.ref(`assessments/${standardID}/${assessmentID}`).set({
    assessmentID,
    standardID,
    standardName,
    maxGrade,
    date
  });

export const singleGetAssessment = (standardID, assessmentID) =>
  db.ref(`assessments/${standardID}/${assessmentID}`).once('value');

export const getAllAssessments = ( standardID ) => 
  db.ref(`assessments/${standardID}`).once('value');
