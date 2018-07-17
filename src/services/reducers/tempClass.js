const tempClass = (state, action) => {
    switch (action.type) {
      case 'ADD_TEMP_CLASS':
        return {
          id: action.id,
          year: action.year,
          grade: action.grade,
          school: action.school,
          teacher: action.userID,
          standardList: action.standards,
          studentList: action.students,
        }
      case 'ADD_TEMP_STANDARD':
        return {
            id: action.id,
            standardName: action.standardName,
            assessmentType: action.assessmentType,
            subject: action.subject,
            standardDetails: action.standardDetails
        }
      case 'ADD_TEMP_STUDENT':
        return {
            id: action.id,
            firstName: action.firstName,
            lastName: action.lastName,
            grades: action.grades
        }
      default:
        return state;
    }
  };

const createTempDict = (state, action) => {
  switch (action.type) {
    case 'ADD_TEMP_STANDARD':
      return Object.assign({}, state['newStandards'], {
      [action.id]: tempClass(state[action.id], action)
      })
    case 'ADD_TEMP_STUDENT':
      return Object.assign({}, state['newStudents'], {
        [action.id]: tempClass(state[action.id], action)
        })
    case 'UPDATE_CLASS_STANDARDS':
      return Object.assign({}, state, {
        standardList:  Object.assign({}, state['standardList'], {
          [action.id]: true
        })
      })
    case 'UPDATE_CLASS_STUDENTS':
      return Object.assign({}, state, {
        studentList:  Object.assign({}, state['studentList'], {
          [action.id]: true
        })
      })
    default:
      return state;
  }
}

const tempNewClasses = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_TEMP_CLASS':
        return Object.assign({}, state, {
        newClass: tempClass(state, action)
        })
      case 'ADD_TEMP_STANDARD':
        return Object.assign({}, state, {
          newStandards: createTempDict(state, action)
          })
      case 'UPDATE_CLASS_STANDARDS':
        return Object.assign({}, state, {
          newClass: createTempDict(state['newClass'], action)
          })
      case 'ADD_TEMP_STUDENT':
        return Object.assign({}, state, {
          newStudents: createTempDict(state, action)
          })
      case 'UPDATE_CLASS_STUDENTS':
        return Object.assign({}, state, {
          newClass: createTempDict(state['newClass'], action)
          })
      case 'CLEAR_TEMP':
        return {}
      default:
        return state;
    }
  };

  export default tempNewClasses;
