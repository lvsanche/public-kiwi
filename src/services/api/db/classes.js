import { db } from '../firebase';

export const postNewClass = (classID, teacherID, year, grade, schoolName) =>
  db.ref(`classes/${classID}`).set({
    classID,
    teacherID,
    year,
    grade,
    schoolName
  });

export const postNewClassWithStudentsAndStandards = 
  (classID, teacherID, year, grade, schoolName, standardList, studentList) =>
  db.ref(`classes/${classID}`).set({
    teacherID,
    year,
    grade,
    schoolName,
    standardList,
    studentList,
});

export const singleGetStandardsFromClass = (classID) =>
  db.ref(`classes/${classID}/standardList`).once('value');

export const singleGetStudentsFromClass = (classID) =>
  db.ref(`classes/${classID}/studentList`).once('value');
