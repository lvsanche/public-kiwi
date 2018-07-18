import { combineReducers } from 'redux';
import standards from './standards';
import students from './students';
import sessionReducer from './session';
import classes from './classes';
import tempNewClasses from './tempClass';
import assessments from './assessments';

const gradesApp = combineReducers({
  standards,
  students,
  classes,
  assessments,
  tempNewClasses,
  sessionState: sessionReducer,
});

export default gradesApp;
