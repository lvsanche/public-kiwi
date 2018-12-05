import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import ClassItem from './ClassItem';
import StandardItem from '../../SharedComponents/listItems/StandardItem';
import StudentItem from '../../SharedComponents/listItems/StudentItem';
import { standards, students, classes, users } from '../../../services/api';
import * as routes from '../../../constants/routes';

class ConfirmNewClass extends Component {

    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillMount() {
		window.scrollTo(0,0);
	}

    handleSubmit() {
        const { newStandards, nClass, setUpAssessments,
          newStudents, history, clearTempAll, setClassID,
          addExistingStandard, addNewStudent } = this.props;
        

        const { classID, year, grade, schoolName, teacherID} = nClass;
        classes.postNewClass(classID, teacherID, year, grade, schoolName)
        .then( () => {
            setClassID(classID);
        })
        .catch( error => console.log(error));
        //empty the Temp Class, set the currentClass
        users.postClassToUser(teacherID, classID).catch(error => console.log(error));


        var standardsObj = {};
        Object.keys(newStandards).forEach( standardID => {
            const { standardName, standardDetails, gradeType, subject} = newStandards[standardID];
            standardsObj[standardID] = {};
        
            standards.postNewStandard(standardID, nClass.classID, standardName, standardDetails, gradeType, subject)
            .then( () => {
                addExistingStandard(newStandards[standardID]);
            })
            .catch( error => console.log(error));
            });
        
        //time to use the standardObj
        setUpAssessments(standardsObj);

        Object.keys(newStudents).forEach( studentID => {
          const {firstName, lastName} = newStudents[studentID];
          students.postNewStudent( studentID, firstName, lastName, nClass.classID )
          .then( () => {
            addNewStudent(studentID, firstName, lastName, nClass.classID);
          })
          .catch( error => console.log(error));
        });


        
        
        clearTempAll();
        history.push(routes.DASHBOARD);
    }

    handleCancel(){
        const { clearTempAll, history} = this.props;
        clearTempAll();
        history.push(routes.DASHBOARD);
    }

    render(){
        const { nClass , newStudents, newStandards, teacherName  } = this.props;
        return (
            <div className="multi-card-container flex-container-cols">
                <ClassItem {...nClass} teacherName={teacherName} />
                <StandardsTable standards={newStandards} />
                <StudentsTable students={newStudents} />
                <div className="button-container">
                    <SubmitButton handleSubmit={this.handleSubmit} />
                    <CancelButton handleCancel={this.handleCancel} />
                </div>
                
            </div>
        )
    };
}

const SubmitButton = ({handleSubmit}) =>
    <button onClick={handleSubmit}>Submit</button>

const CancelButton = ({handleCancel}) =>
    <button onClick={handleCancel}>Cancel</button>

const StandardsTable = ({ standards } ) =>
    <div className="card">
       <div className="card-title">
           <h2>Standards</h2>
       </div>
       <div className="container">
        <h3> Total # of Standards: {Object.keys(standards).length}</h3>
        <table className="default-table">
                <thead>
                    <tr>
                        <th>Standard</th>
                        <th>Standard Type</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.keys(standards).map( (standardID , index) => ( <StandardItem key={index} { ...standards[standardID]} />))
                }
                </tbody>
            </table>
       </div>
        
    </div>

const StudentsTable = ({ students }) =>
    <div className="card" >
        <div className="card-title">
            <h2>Students</h2>
        </div>
        <div className="container">
            <h3> Total # of Students: {Object.keys(students).length}</h3>
            <table className="default-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.keys(students).map( (studentKey, index) => ( <StudentItem key={index} index={index} {...students[studentKey]} />))
                }
                </tbody>
            </table>
        </div>
    </div>

export default withRouter(ConfirmNewClass);
