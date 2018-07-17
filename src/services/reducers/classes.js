const classroom = (state, action) => {
    switch (action.type) {
      case 'ADD_CLASS':
        return {
          id: action.id,
          year: action.year,
          grade: action.grade,
          school: action.school
        }
      default:
        return state;
    }
  };

const classes = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_CLASS':
        return Object.assign({}, state, {
        [action.id]: classroom(state[action.id], action)
      })
      default:
        return state;
    }
  };
  
  export default classes;