import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { students } from '../../services/api';
import { createWholeDict } from '../../services/dataFormatters/miscFormatters';
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
    }

    handleChange( value, studentID){
        var currentGrades = {...this.state.studentGrades};
        ( typeof value === 'string' )
        ? currentGrades[studentID]= value
        : currentGrades[studentID]= { ...value }

        this.setState({
            studentGrades: currentGrades
        })
    }

    handleSubmit(){
        const { addGradesStudent, assessment, history } = this.props;
        var { studentGrades } = this.state;
        
        var numEmptyGrades = Object.keys(studentGrades)
            .filter(studentID => studentGrades[studentID] === "");
        
        if ( numEmptyGrades.length === 0){
            if ( assessment.gradingType === 'counting' ){
                Object.keys(studentGrades).forEach(studentID => {
                    studentGrades[studentID] = createWholeDict(studentGrades[studentID])
                });
            }
    
            Object.keys(studentGrades).forEach(
              studentID => {
                  addGradesStudent(studentID, assessment.id, studentGrades[studentID])
                  students.doSetStudentGrades(studentID, assessment.id, studentGrades[studentID])
                  .catch(error => console.log(error))
                }
            );
            history.push(routes.DASHBOARD);
        }
        else{
            this.setState({error: numEmptyGrades.length +' students need grades entered'})
        }
        
    }

    componentWillMount(){
        const { students, assessment } = this.props;
        //prep list depending on gradingType
        const curGrades = this.state.studentGrades;

        (assessment.maxGrade === '+') ?
            Object.keys(students).forEach( id => curGrades[id] = '-')
        :
            Object.keys(students).forEach( id => curGrades[id] = '')
    
        this.setState({ studentGrades: {...curGrades}});
    }

    render() {
        const { assessment } = this.props;
        const {studentGrades, error} = this.state;
        // console.log(this.state)
        return (
            <div className="table-container card">
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
                            studentGrades={studentGrades} 
                            handleChange={this.handleChange}/>
                    </table>
                    <div className="button-container">
                        <button onClick={ this.handleSubmit }>Submit Grades</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(AddGrade);


