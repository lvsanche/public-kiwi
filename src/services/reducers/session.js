const INITIAL_STATE = {
    authUser: null,
    teacherName: '',
    classID: null,
};

const setTeacherName = (state, action) => ({
    ...state,
    teacherName: action.teacherName
});

const setClassID = (state, action) => ({
  ...state,
  classID: action.classID
})

const setAuthUser = (state, action) => ({
    ...state,
    authUser: action.authUser
});

const session = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case 'SET_AUTH_USER' : {
        return setAuthUser(state, action);
      }
      case 'SET_TEACHER_NAME': {
        return setTeacherName(state, action);
      }
      case 'SET_CLASS_ID': {
        return setClassID(state, action);
      }
      default: {
        return state;
      }
    }
}

export default session;
