const INITIAL_STATE = {
    authUser: null,
    userName: '',
    currentClass: null,
};

const setUser = (state, action) => ({
    ...state,
    firstName: action.firstName,
    lastName: action.lastName
});

const setCurrentClass = (state, action) => ({
  ...state,
  currentClass: action.currentClass
})

const setAuthUser = (state, action) => ({
    ...state,
    authUser: action.authUser
});

function sessionReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'SET_AUTH_USER' : {
        return setAuthUser(state, action);
      }
      case 'SET_USER': {
        return setUser(state, action);
      }
      case 'SET_CURRENT_CLASS': {
        return setCurrentClass(state, action);
      }
      default : return state;
    }
}

export default sessionReducer;
