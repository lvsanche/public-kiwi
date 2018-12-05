import { v4 } from 'node-uuid';
export const addNewAssessment = 
    (date, standardID, maxGrade, standardName) => ({
    type: 'ADD_ASSESSMENT',
    assessmentID: v4(),
    date,
    maxGrade,
    standardID,
    standardName
  });
  
export const addExistingAssessment = 
    ({ assessmentID, date, standardID, maxGrade, standardName }) => ({
    type: 'ADD_ASSESSMENT',
    assessmentID,
    date,
    maxGrade,
    standardID,
    standardName
});

export const setUpAssessments = ( standardsObject ) => ({
    type: 'SET_UP_ASSESSMENTS',
    standardsObject
});