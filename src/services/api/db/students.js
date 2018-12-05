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

<<<<<<< HEAD
export const postStudentGrades = ( studentID, classID, grades ) =>
=======
  export const postStudentGrades = ( studentID, classID, grades ) =>
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
  db.ref(`students/${classID}/${studentID}/grades`).set(grades);
  
export const singleGetStudent = (studentID, classID) =>
  db.ref(`students/${classID}/${studentID}`).once('value');

export const getAllStudents = ( classID ) =>
  db.ref(`students/${classID}`).once('value');