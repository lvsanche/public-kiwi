export const setUser = (firstName, lastName) => ({
    type: 'SET_USER',
    firstName,
    lastName
  });
  
export const setAuthUser = (authUser) => ({
  type: 'SET_AUTH_USER',
  authUser
});

export const setCurrentClass = ( currentClass ) => ({
  type: 'SET_CURRENT_CLASS',
  currentClass
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