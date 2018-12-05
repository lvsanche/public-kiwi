const student = (state, action) => {
  switch (action.type) {
    case 'ADD_GRADE_STUDENT':
      return Object.assign({},
          state,
          {
            'grades': Object.assign({}, state['grades'], {
              [action.assessmentID]: action.grade
            })
          }
      )
    case 'ADD_STUDENT':
      return {
        studentID: action.studentID,
        firstName: action.firstName,
        lastName: action.lastName,
        classID: action.classID,
        grades: action.grades
      }
    default:
      return state;
  }
};

const students = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAR_STUDENTS':
      return {}
    case 'ADD_GRADE_STUDENT':
      return Object.assign( {}, state, {
        [action.studentID]: student(state[action.studentID], action)
      }

      )
    case 'ADD_STUDENT':
      return Object.assign({}, state, {
      [action.studentID]: student(state[action.studentID], action)
    })
    default:
      return state;
  }
};

export default students;
