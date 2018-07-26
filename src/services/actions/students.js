export const addGradesStudent = (studentID, assessmentID, grade) => ({
    type: 'ADD_GRADE_STUDENT',
    studentID,
    assessmentID,
    grade
  }
);

export const editStudent = (studentID, grades) => ({
    type: 'EDIT_STUDENT',
    studentID,
    grades
  }
  );
  
export const addNewStudent = (studentID, firstName, lastName, classID) => ({
    type:'ADD_STUDENT',
    studentID,
    grades: {},
    firstName,
    lastName,
    classID,
}
);

export const addExistingStudent = ({studentID, firstName, lastName, grades, classID}) => ({
    type: 'ADD_STUDENT',
    studentID,
    firstName,
    lastName,
    classID,
    grades
}
);