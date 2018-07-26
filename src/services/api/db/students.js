import { db } from '../firebase';

export const postNewStudent = (studentID, firstName, lastName, classID) =>
  db.ref(`students/${classID}/${studentID}`).set({
    studentID,
    classID,
    firstName,
    lastName,
    'grades' : {}
  });

export const postStudentGrade = ( studentID, classID, assessmentID, grade ) =>
  db.ref(`students/${classID}/${studentID}/grades/${assessmentID}`).set(grade);

  export const postStudentGrades = ( studentID, classID, grades ) =>
  db.ref(`students/${classID}/${studentID}/grades`).set(grades);
  
export const singleGetStudent = (studentID, classID) =>
  db.ref(`students/${classID}/${studentID}`).once('value');

export const getAllStudents = ( classID ) =>
  db.ref(`students/${classID}`).once('value');