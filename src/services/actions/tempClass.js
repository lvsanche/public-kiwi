import { v4 } from 'node-uuid';
export const addTempClass = ( year, grade, school, userID ) => ({
    type: 'ADD_TEMP_CLASS',
    id: v4(),
    year,
    grade,
    school,
    userID,
    standardsList: {},
    studentList: {},
  });
  
  export const addTempStandard = (standardName, assessmentType, subject, standardDetails) => ({
    type: 'ADD_TEMP_STANDARD',
    id: v4(),
    standardName,
    assessmentType,
    subject,
    standardDetails
  });

  export const updateTempClassStandards = (id) => ({
    type: 'UPDATE_CLASS_STANDARDS',
    id,
  });
  
  export const addTempStudent = (firstName, lastName) => ({
    type:'ADD_TEMP_STUDENT',
    id: v4(),
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
  