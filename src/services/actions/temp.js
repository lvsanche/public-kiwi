import { v4 } from 'node-uuid';
export const addTempClass = ( year, grade, schoolName, teacherID ) => ({
    type: 'ADD_TEMP_CLASS',
    classID: v4(),
    year,
    grade,
    schoolName,
    teacherID,
  });

export const addTempAssessment = ( date, standardID, maxGrade, standardName ) => ({
  type: 'ADD_TEMP_ASSESSMENT',
  assessmentID: v4(),
  date,
  standardID,
  maxGrade,
  standardName
});
  
export const addTempStandard = (standardName, classID, gradeType, subject, standardDetails) => ({
  type: 'ADD_TEMP_STANDARD',
  standardID: v4(),
  classID,
  standardName,
  gradeType,
  subject,
  standardDetails
});

export const updateTempClassStandards = (id) => ({
  type: 'UPDATE_CLASS_STANDARDS',
  id,
});

export const addTempStudent = (firstName, lastName) => ({
  type:'ADD_TEMP_STUDENT',
  studentID: v4(),
  grades: {},
  firstName,
  lastName,
});

export const updateTempClassStudents = (id) => ({
  type: 'UPDATE_CLASS_STUDENTS',
  id,
});

export const clearTempAll = () => ({
  type: 'CLEAR_TEMP',
});
