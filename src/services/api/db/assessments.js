import { db } from '../firebase';

export const postNewAssessment = 
  (assessmentID, standardID, standardName, maxGrade, date, classID) =>
  db.ref(`assessments/${classID}/${standardID}/${assessmentID}`).set({
    assessmentID,
    standardID,
    standardName,
    maxGrade,
    date
  });

export const singleGetAssessment = (standardID, assessmentID, classID) =>
  db.ref(`assessments/${classID}/${standardID}/${assessmentID}`).once('value');

export const getAllAssessments = ( classID ) => 
  db.ref(`assessments/${classID}`).once('value');
