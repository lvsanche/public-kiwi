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

    handleSubmit() {
        const { teacherName, newStandards, authUser, nClass,
          newStudents, history, clearTempAll, setUser, setCurrentClass,
          addStandard, addStudent } = this.props;
        Object.keys(newStandards).forEach( standardID => {
          const {standardName, standardDetails, assessmentType, subject} = newStandards[standardID];
          standards.doCreateStandard( authUser.uid, standardID, standardName, standardDetails, assessmentType, subject )
          .then( () => {
            addStandard(standardID, standardName, assessmentType, subject, standardDetails );
          })
          .catch( error => console.log(error));
        });


        Object.keys(newStudents).forEach( studentID => {
          const {firstName, lastName} = newStudents[studentID];
          students.doCreateNewStudent( studentID, firstName, lastName, nClass.id )
          .then( () => {
            addStudent(studentID, firstName, lastName, nClass.id);
          })
          .catch( error => console.log(error));
        });


        const { id, year, grade, school, teacher, standardList, studentList} = nClass;
        classes.doCreateClassWithStudentsAndStandards(id, teacher, year, grade, school, standardList, studentList)
        .then( () => {
          setUser(teacherName);
          setCurrentClass(id);
        })
        .catch( error => console.log(error));
        //empty the Temp Class, set the currentClass
        users.doAddClassToUser(teacher, id).catch(error => console.log(error));
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
                <ClassItem {...nClass} username={teacherName} />
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
                    Object.keys(standards).map( (standardKey,index) => ( <StandardItem key={index} { ...standards[standardKey]} />))
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
            <table className="default-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.keys(students).map( (studentKey, index) => ( <StudentItem key={index} {...students[studentKey]} />))
                }
                </tbody>
            </table>
        </div>
    </div>

export default withRouter(ConfirmNewClass);
