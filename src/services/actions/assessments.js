import { v4 } from 'node-uuid';
export const addAssessment = ( date, standardID, gradingType, maxGrade, standardName, subject) => ({
    type: 'ADD_ASSESSMENT',
    id: v4(),
    date,
    standardID,
    gradingType,
    maxGrade,
    standardName,
    subject
  });
  
export const addExistingAssessment = ( id, date, standardID, gradingType, maxGrade, standardName, subject) => ({
    type: 'ADD_ASSESSMENT',
    id,
    date,
    standardID,
    gradingType,
    maxGrade,
    standardName,
    subject
});