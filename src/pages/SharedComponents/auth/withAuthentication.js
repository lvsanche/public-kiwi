import React from 'react';
import { firebase, users, classes, standards, students, assessments } from '../../../services/api';
import { connect } from 'react-redux';
import { setUser, setAuthUser, setCurrentClass, clearStandards, clearStudents, clearAssessments  } from '../../../services/actions/session';
import { addStandard } from '../../../services/actions/standards';
import { addExistingStudent } from '../../../services/actions/students';
import { addExistingAssessment } from '../../../services/actions/assessments';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {

    componentDidMount() {
        const { setUser, setAuthUser, setCurrentClass,
          addStandard, addExistingStudent, addExistingAssessment, clearStudents, clearStandards, clearAssessments } = this.props;

          firebase.auth.onAuthStateChanged(authUser => {
            if (authUser){
              const { uid } = authUser;
              setAuthUser(authUser);
              users.onceGetUserInfo(uid).then( (snap) => {
                setUser(snap.val().firstName, snap.val().lastName);
                if( typeof snap.val().classes !== 'undefined'){
                  const currentClassID = Object.keys(snap.val().classes)[0]
                  setCurrentClass(currentClassID);
                  classes.onceGetStandardIDsOfClass(currentClassID).then( (snap) => {
                    const standardList = snap.val();

                    Object.keys(standardList).forEach( standardID => {
                      standards.onceGetStandard(standardID).then( snap => {
                        const standard = snap.val();

                        const { standardID, standardName, assessmentType, standardDetails, subject } = standard;
                        addStandard(standardID, standardName, assessmentType, subject, standardDetails);
                      }).catch(error=>console.log(error));
                    })
                  }).catch(error=>console.log(error));
                  //importing students
                  classes.onceGetStudentIDsOfClass(currentClassID).then( snap => {
                    const studentList = snap.val();
                    Object.keys(studentList).forEach( studentID => {
                      students.onceGetStudent(studentID).then( snap => {
                        const student = snap.val();

                        const { firstName, lastName, grades, studentID } = student;

                        addExistingStudent(studentID, firstName, lastName, grades, currentClassID)
                      }).catch(error=>console.log(error));
                    })
                  }).catch(error=>console.log(error));
                  //importing assessments
                  classes.onceGetAssessmentIDsOfClass(currentClassID).then( snap => {
                    const assessmentList = snap.val();
                    Object.keys(assessmentList).forEach( assessmentID => {
                      assessments.onceGetAssessment(assessmentID).then( snap => {
                        const assessment = snap.val();

                        const { assessmentID, date, standardID, gradingType, maxGrade, standardName, subject } = assessment;

                        addExistingAssessment( assessmentID, date, standardID, gradingType, maxGrade, standardName, subject);
                      }).catch(error=>console.log(error));
                    })
                  }).catch(error=>console.log(error));
                }
              })
              .catch(error => console.log(error))
            }
            else{
              setAuthUser(null);
              setUser(null);
              setCurrentClass(null);
              clearStandards();
              clearStudents();
              clearAssessments();
            }

        });
    }

    render() {
        return (
            <Component />
        );
    }
  }


  const mapStateToProps = (state) => {
      return {
        currentClass: state.sessionState.currentClass,
        state: state
      }
  };

  const mapDispatchToProps = {
    setAuthUser,
    setUser,
    setCurrentClass,
    addStandard,
    addExistingStudent,
    addExistingAssessment,
    clearStandards,
    clearStudents,
    clearAssessments
  };


  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;
