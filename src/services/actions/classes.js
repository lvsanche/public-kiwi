import { v4 } from 'node-uuid';
export const addClass = ( year, grade, school ) => ({
    type: 'ADD_CLASS',
    id: v4(),
    year,
    grade,
    school,
  });