import { db } from '../firebase';

export const doCreateAssessment = (date, assessmentID, gradingType, maxGrade, standardID, standardName, subject ) =>
  db.ref(`assessments/${assessmentID}`).set({
    assessmentID,
    standardID,
    standardName,
    subject,
    gradingType,
    date,
    maxGrade
  });

export const onceGetAssessment = (assessmentID) =>
db.ref(`assessments/${assessmentID}`).once('value');
