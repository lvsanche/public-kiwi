import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddAssessmentContainer from './NewAssessment/AddAssessmentContainer';
import EditStandardContainer from './StandardList/EditStandard/EditStandardContainer';
import LoadStudentsContainer from './NewClass/LoadStudents/LoadStudentsContainer';
import LoadStandardsContainer from './NewClass/LoadStandards/LoadStandardsContainer';
import EditStudentContainer from './StudentList/EditStudent/EditStudentContainer';
import StandardListContainer from './StandardList/StandardListContainer';
import StudentListContainer from './StudentList/StudentListContainer';
import AddClassContainer from './NewClass/AddClass/AddClassContainer';
import DashboardContainer from './Home/Dashboard/DashboardContainer';
import ConfirmNewClassContainer from './NewClass/ConfirmClass/ConfirmNewClassContainer';
import AddGradesContainer from './AddGrades/AddGradesContainer';
import StudentStatsContainer from './StudentStats/StudentStats';
import SignInContainer from './Sign/SignIn/SignIn';
import SignUpPage from './Sign/SignUp/SignUp';
import AddStudentsContainer from './NewClass/AddStudents/AddStudentsContainer';
import PasswordForgetPage from './Sign/Passwords/PasswordForget';
import LandingPage from './Home/Splash/LandingPage';
import * as routes from '../constants/routes';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (
  <main className="main-container">
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path={routes.ADD_ASSESSMENT} component={AddAssessmentContainer}/>
      <Route exact path={routes.STANDARDS_LIST} component={StandardListContainer}/>
      <Route exact path={routes.EDIT_STANDARD} component={EditStandardContainer} />
      <Route path={routes.EDIT_STUDENT+'/:uuid?'} component={EditStudentContainer} />
      <Route exact path={routes.STUDENTS_LIST} component={StudentListContainer}/>
      <Route exact path={routes.LOAD_STUDENTS} component={LoadStudentsContainer} />
      <Route exact path={routes.LOAD_STANDARDS} component={LoadStandardsContainer} />
      <Route exact path={routes.SIGN_IN} component={SignInContainer} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={routes.ADD_CLASS} component={AddClassContainer} />
      <Route exact path={routes.DASHBOARD} component={DashboardContainer} />
      <Route exact path={routes.CONFIRM_NEW_CLASS} component={ConfirmNewClassContainer} />
      <Route path={routes.ADD_GRADES+'/:uuid?'} component={AddGradesContainer} />
      <Route path={routes.STUDENT_STATS+'/:uuid?'} component={StudentStatsContainer} />
      <Route exact path={routes.ADD_STUDENTS} component={AddStudentsContainer} />
      {/* //<route with routes path that has /:uuid? */}
    </Switch>
  </main>
)

export default Main
