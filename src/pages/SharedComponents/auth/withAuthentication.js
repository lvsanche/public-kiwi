import React from 'react';
import { firebase, users, standards, students, assessments } from '../../../services/api';
import { connect } from 'react-redux';
import { addExistingStandard } from '../../../services/actions/standards';
import { addExistingStudent } from '../../../services/actions/students';
import { addExistingAssessment, setUpAssessments } from '../../../services/actions/assessments';
import { setTeacherName, setAuthUser, setClassID, clearStandards,
  clearStudents, clearAssessments  } from '../../../services/actions/session';


const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {

    componentDidMount() {
        const { setTeacherName, setAuthUser, setClassID, setUpAssessments,
          addExistingStandard, addExistingStudent, addExistingAssessment,
          clearStudents, clearStandards, clearAssessments } = this.props;

          firebase.auth.onAuthStateChanged(authUser => {
            if (authUser){
                const { uid } = authUser;
                setAuthUser(authUser);
                users.singleGetUserInfo(uid).then( (snap) => {
                setTeacherName(snap.val().firstName, snap.val().lastName);
                if( typeof snap.val().classes !== 'undefined'){
                    const classID = Object.keys(snap.val().classes)[0];
                    setClassID(classID);

                    //importing standards
                    loadStandards(classID, setUpAssessments, addExistingStandard);
                    //import students 
                    loadStudents(classID, addExistingStudent);
                    //importing assessments
                    loadAssessments(classID, addExistingAssessment);
                    
                }
              })
              .catch(error => console.log(error))
            }
            else{
              setAuthUser(null);
              setTeacherName(null, null);
              setClassID(null);
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
        classID: state.session.classID
      }
  };

  const mapDispatchToProps = {
    setAuthUser,
    setTeacherName,
    setClassID,
    setUpAssessments,
    addExistingStandard,
    addExistingStudent,
    addExistingAssessment,
    clearStandards,
    clearStudents,
    clearAssessments
  };


  return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
}

const loadStandards = (classID, setUpAssessments, addExistingStandard) => {
     standards.getAllStandards(classID).then( snap => {
                        const standardsObject = snap.val();
                        //Need to set up assessments with the standards

                        var standardsObj = {};
                        Object.keys(standardsObject).forEach(standardID => {
                            addExistingStandard(standardsObject[standardID]);
                            standardsObj[standardID]= {};
                        });

                        setUpAssessments(standardsObj);
                    }).catch(error => console.log(error)); //end of getAllStandards

}


const loadAssessments = ( classID, addExistingAssessment) => {
    assessments.getAllAssessments(classID).then( snap => {
        const assessmentsObject = snap.val();
        if(assessmentsObject !== null)
        {    
            Object.keys(assessmentsObject).forEach( standardID => {
                const standardObjWAssessments = assessmentsObject[standardID];
                Object.keys(standardObjWAssessments).forEach( assessmentID => {
                    addExistingAssessment(standardObjWAssessments[assessmentID]);
                })
            });
        }
    }).catch(error => console.log(error)); // end of getAllAssessments
}

const loadStudents = ( classID, addExistingStudent ) => {
    students.getAllStudents(classID).then( snap => {
        const studentsObject = snap.val();
        Object.keys(studentsObject).forEach( studentID => {
            addExistingStudent(studentsObject[studentID]);
        });
    }).catch(error => console.log(error));
}

export default withAuthentication;
