export const setTeacherName = (firstName, lastName) => ({
    type: 'SET_TEACHER_NAME',
    teacherName: firstName + ' ' + lastName
  });
  
export const setAuthUser = (authUser) => ({
  type: 'SET_AUTH_USER',
  authUser
});

export const setClassID = ( classID ) => ({
  type: 'SET_CLASS_ID',
  classID
})

export const clearStandards = () => ({
  type: 'CLEAR_STANDARDS',
});

export const clearStudents = () => ({
  type: 'CLEAR_STUDENTS',
});

export const clearAssessments = () => ({
  type: 'CLEAR_ASSESSMENTS',
});
