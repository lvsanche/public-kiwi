import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { students, assessments } from '../../services/api';
import TableBody from './components/TableBuilder';
import ErrorBanner from '../SharedComponents/ErrorBanner';

const INITIAL_STATE = {
    error: '',
    studentGrades: {}
};

class AddGrade extends Component {
    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillUnmount(){
        window.scrollTo(0,0);
<<<<<<< HEAD
        this.handleCancel();
=======
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
    }

    handleChange( value, studentID){
        var currentGrades = {...this.state.studentGrades};
        currentGrades[studentID] = ( typeof value === 'string' )
        ? value
        : { ...value }

        this.setState({
            studentGrades: currentGrades
        })
    }
<<<<<<< HEAD
    
=======
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
    handleCancel() {
        this.setState({...INITIAL_STATE});
        this.props.clearTempAll();
        this.props.history.push(routes.DASHBOARD);
    }

    handleSubmit(){
        const { addGradesStudent, assessment, history, 
             classID, addExistingAssessment, clearTempAll } = this.props;
        var { studentGrades } = this.state;
        
        var numEmptyGrades = Object.keys(studentGrades)
            .filter(studentID => studentGrades[studentID] === "");
        
        if ( numEmptyGrades.length === 0){
    
            Object.keys(studentGrades).forEach(
              studentID => {
                  addGradesStudent(studentID, assessment.assessmentID, studentGrades[studentID])
                  students.postStudentGrade(studentID, classID, assessment.assessmentID, studentGrades[studentID])
                  .catch(error => console.log(error))
                }
            );

            //add assessment locally and also post it 
            addExistingAssessment(assessment);
            assessments.postNewAssessment(assessment.assessmentID, assessment.standardID, 
<<<<<<< HEAD
                assessment.standardName, assessment.maxGrade, assessment.date, classID).catch( error => console.log(error));
=======
                assessment.standardName, assessment.maxGrade, assessment.date).catch( error => console.log(error));
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
            
            clearTempAll();

            history.push(routes.DASHBOARD);
        }
        else{
            this.setState({error: numEmptyGrades.length +' students need grades entered'})
        }
        
    }

    componentWillMount(){
        const { students, assessment} = this.props;
        //prep list depending on gradingType
        const curGrades = this.state.studentGrades;
        (assessment.maxGrade === '+') ?
            Object.keys(students).forEach( id => curGrades[id] = '-')
        :
            Object.keys(students).forEach( id => curGrades[id] = '')
    
        this.setState({ studentGrades: {...curGrades}});
    }

    render() {
        const { standard, assessment } = this.props;
        const {studentGrades, error} = this.state;
        // console.log(this.state)
        return (
            <div className="table-container card margin-le">
                <div className="card-title">
                    <h2>Enter Grades</h2>
                </div>
                {error && <ErrorBanner error={error}/>}
                <div className="container">
                    <table className="default-table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <TableBody
                            assessment={assessment}
                            standard={standard}
                            studentGrades={studentGrades} 
                            handleChange={this.handleChange}/>
                    </table>
                    <div className="button-container">
                        <button onClick={ this.handleSubmit }>Submit Grades</button>
                        <button onClick={this.handleCancel }>Cancel</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(AddGrade);


