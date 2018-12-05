import { v4 } from 'node-uuid';
export const addNewClass = ( year, grade, schoolName ) => ({
    type: 'ADD_CLASS',
    classID: v4(),
    year,
    grade,
    schoolName,
  });