import { db } from '../firebase';

export const doCreateClass = (id, teacher, year, grade, school) =>
  db.ref(`classes/${id}`).set({
    teacher,
    year,
    grade,
    school
  });

export const doCreateClassWithStudentsAndStandards = (id, teacher, year, grade, school, standardList, studentList) =>
  db.ref(`classes/${id}`).set({
    teacher,
    year,
    grade,
    school,
    standardList,
    studentList,
});

export const doAppendAssessment = (classID, assessmentID ) =>
  db.ref(`classes/${classID}/assessmentList/${assessmentID}`).set(
    true
  );

export const onceGetStandardIDsOfClass = (classID) =>
  db.ref(`classes/${classID}/standardList`).once('value');

export const onceGetAssessmentIDsOfClass = (classID) =>
  db.ref(`classes/${classID}/assessmentList`).once('value');

export const onceGetStudentIDsOfClass = (classID) =>
  db.ref(`classes/${classID}/studentList`).once('value');
