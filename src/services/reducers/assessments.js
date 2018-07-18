const assessment = (state, action) => {
    switch (action.type) {
      case 'ADD_ASSESSMENT':
        return {
          id: action.id,
          date: action.date,
          standardID: action.standardID,
          gradingType: action.gradingType,
          maxGrade: action.maxGrade,
          standardName: action.standardName,
          subject: action.subject
        }
      default:
        return state;
    }
  };

const assessments = (state = {}, action) => {
    switch (action.type) {
      case 'CLEAR_ASSESSMENTS':
        return {}
      case 'ADD_ASSESSMENT':
        return Object.assign({}, state, {
        [action.id]: assessment(state[action.id], action)
      })
      default:
        return state;
    }
  };
  
  export default assessments;