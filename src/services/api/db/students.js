import { db } from '../firebase';

export const doCreateNewStudent = (studentID, firstName, lastName, currentClass) =>
  db.ref(`students/${studentID}`).set({
    studentID,
    firstName,
    lastName,
    currentClass,
    'grades' : {}
  });

export const doSetStudentGrades = ( studentID, assessmentID, grade ) =>
  db.ref(`students/${studentID}/grades/${assessmentID}`).set(grade);

  export const doSetAllStudentGrades = ( studentID, grades ) =>
  db.ref(`students/${studentID}/grades`).set(grades);
  
export const onceGetStudent = (studentID) =>
  db.ref(`students/${studentID}`).once('value');
