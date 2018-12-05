const assessment = (state, action) => {
    switch (action.type) {
      case 'ADD_ASSESSMENT':
        return Object.assign({}, state, {
          [action.assessmentID]: Object.assign({}, state[action.assessmentID], 
            {
              assessmentID: action.assessmentID,
              date: action.date,
              standardID: action.standardID,
              maxGrade: action.maxGrade,
              standardName: action.standardName
            }
        )
      })  
      default:
        return state;
    }
  };

const assessments = (state = {}, action) => {
    switch (action.type) {
      case 'CLEAR_ASSESSMENTS':
        return {}
      case 'SET_UP_ASSESSMENTS':
        return Object.assign({}, state, action.standardsObject)
      case 'ADD_ASSESSMENT':
        return Object.assign({}, state, {
        [action.standardID]: assessment(state[action.standardID], action)
      })
      default:
        return state;
    }
  };
  
  export default assessments;