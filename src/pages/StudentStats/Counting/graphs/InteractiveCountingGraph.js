import React, {Component} from 'react';
import AssessmentCountingGraph from './AssessmentCountingGraph';
import {convertObjToArray} from '../../../../services/dataFormatters/miscHelpers';

const INITIAL_STATE = {
    assessmentID: 'latest'
};

class InteractiveCountingGraph extends Component {
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
                            convertObjToArray(assessments[standard.standardID]).map(assessmentOptions)
                        }
                    </select>
                    <AssessmentCountingGraph 
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

export default InteractiveCountingGraph;