const standard = (state, action) => {
  switch (action.type) {
    case 'EDIT_STANDARD':
      return Object.assign({},
          state,
          {
            standardName: action.standardName,
            assessmentType: action.assessmentType,
            subject: action.subject,
            standardDetails: action.standardDetails
          }
      )
    case 'ADD_STANDARD':
      return {
        id: action.id,
        standardName: action.standardName,
        assessmentType: action.assessmentType,
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
      [action.id]: standard(state[action.id], action)
    })
    default:
      return state;
  }
};

export default standards;
