import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { students } from '../../services/api';
import { createWholeDict } from '../../services/dataFormatters/miscFormatters';
import TableBody from './components/TableBuilder';

const INITIAL_STATE = {
};

class AddGrade extends Component {
    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange( value, studentID){
        ( typeof value === 'string' ) ? this.setState({
          [studentID]: value
        })
        : this.setState({
          [studentID]: { ...value }
        })
    }

    handleSubmit(){
        const { addGradesStudent, assessment, history } = this.props;
        var gradesList = this.state;
        if ( assessment.gradingType === 'counting' ){
            Object.keys(gradesList).forEach(studentID => {
                gradesList[studentID] = createWholeDict(gradesList[studentID])
            });
        }

        Object.keys(gradesList).forEach(
          studentID => {
              addGradesStudent(studentID, assessment.id, gradesList[studentID])
              students.doSetStudentGrades(studentID, assessment.id, gradesList[studentID])
              .catch(error => console.log(error))
            }
        );
        history.push(routes.DASHBOARD);
    }

    componentWillMount(){
        const { students, assessment } = this.props;
        //prep list depending on gradingType
        if( assessment.maxGrade === '+'){ 
            Object.keys(students).forEach( id => this.setState({[id]:'-'} ));
        }
        else{
            Object.keys(students).forEach( id => this.setState({[id]:''} ));
        }
    }

    render() {
        const { assessment } = this.props;
        const studentGrades = this.state;
        return (
            <div className="table-container">
                Time to enter grades:
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
                <button onClick={this.handleSubmit}> Submit Grades</button>
            </div>
        );
    }
}

export default withRouter(AddGrade);


