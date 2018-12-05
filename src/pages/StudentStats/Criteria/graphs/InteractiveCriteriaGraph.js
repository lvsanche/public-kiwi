import React, {Component} from 'react';
import AssessmentCriteriaGraph from './AssessmentCriteriaGraph';
<<<<<<< HEAD
import {convertObjToArray, compareDateDescendingAssessments } from '../../../../services/dataFormatters/miscHelpers';
=======
import {convertObjToArray} from '../../../../services/dataFormatters/miscHelpers';
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d

const INITIAL_STATE = {
    assessmentID: 'latest'
};

class InteractiveCriteriaGraph extends Component {
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            'assessmentID': event.target.value
        });
    }

    render(){
        const { assessmentID } = this.state;
        const { student, assessments, standard } = this.props;

        if ( standard !== null ){
            return (
                <div>
                    <select 
                      onChange={this.handleChange}
                      value={assessmentID} >
                        <option value='latest'>Latest</option>
                        {
<<<<<<< HEAD
                            convertObjToArray(assessments[standard.standardID]).sort(compareDateDescendingAssessments).map(assessmentOptions)
=======
                            convertObjToArray(assessments[standard.standardID]).map(assessmentOptions)
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
                        }
                    </select>
                    <AssessmentCriteriaGraph 
                        student={student}
                        assessmentID={assessmentID}
                        assessments={assessments}
                        standard={standard} />
                    
                </div>
            )
        }
        else{
            return (<h3> Nothing selected </h3>)
        }
    }
};

const assessmentOptions = (assessment) => <option key={assessment.assessmentID} value={assessment.assessmentID}>{assessment.date}</option>

export default InteractiveCriteriaGraph;