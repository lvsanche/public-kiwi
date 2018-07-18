export const addGradesStudent = (studentID, assessmentID, grade) => ({
    type: 'ADD_GRADE_STUDENT',
    studentID,
    assessmentID,
    grade
  }
);

export const editStudent = (id, grades) => ({
    type: 'EDIT_STUDENT',
    id,
    grades
  }
  );
  
export const addStudent = (id, firstName, lastName, currentClass) => ({
    type:'ADD_STUDENT',
    id,
    grades: {},
    firstName,
    lastName,
    currentClass,
}
);

export const addExistingStudent = (id, firstName, lastName, grades, currentClass) => ({
    type: 'ADD_STUDENT',
    id,
    firstName,
    lastName,
    currentClass,
    grades
}
);