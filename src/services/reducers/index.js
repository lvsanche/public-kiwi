import { combineReducers } from 'redux';
import standards from './standards';
import students from './students';
import session from './session';
import classes from './classes';
import temp from './temp';
import assessments from './assessments';

const gradesApp = combineReducers({
  standards,
  students,
  classes,
  assessments,
  temp,
  session
});

export default gradesApp;
