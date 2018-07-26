const standard = (state, action) => {
  switch (action.type) {
    case 'EDIT_STANDARD':
      return Object.assign({},
          state,
          {
            standardName: action.standardName,
            gradeType: action.gradeType,
            subject: action.subject,
            standardDetails: action.standardDetails
          }
      )
    case 'ADD_STANDARD':
      return {
        standardID: action.standardID,
        classID: action.classID,
        standardName: action.standardName,
        gradeType: action.gradeType,
        subject: action.subject,
        standardDetails: action.standardDetails
      }
    default:
      return state;
  }
};

const standards = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAR_STANDARDS':
      return {}
    case 'EDIT_STANDARD':
    case 'ADD_STANDARD':
      return Object.assign({}, state, {
      [action.standardID]: standard(state[action.standardID], action)
    })
    default:
      return state;
  }
};

export default standards;
