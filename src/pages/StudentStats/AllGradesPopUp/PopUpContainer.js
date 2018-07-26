import React, {Component} from 'react';
import { convertObjToArray, compareDateAscendingAssessments } from '../../../services/dataFormatters/miscHelpers';
import { filterIDsBySubject } from '../../../services/dataFormatters/filterBy';
import SubjectSection from './PopUpTable';

class PopUpSideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            visibility: 'hidden'
        }
        this.handlePopUp = this.handlePopUp.bind(this);
    }

    handlePopUp() {
        if(this.state.visibility === 'hidden'){
            this.setState ({
                visibility: 'visible'
            })
        }
        else{
            this.setState({
                visibility: 'hidden'
            })
        }
    }
    
    render(){
        //testing purpose
        const { student, assessments, standards } = this.props;
        const subjects = ['math', 'languageReading', 'motorSkills', 'socialEmotional'];
        const stdArray = filterLatestGradesPerAssessment(assessments, standards, subjects);
        
        return(
            <section>
                <button className="popUpBtn" onClick={this.handlePopUp}><i className="fa fa-bars" aria-hidden="true"></i></button>
                <div className="popUp" style={this.state}>
                    {
                        stdArray.map( subjectArray => 
                            <SubjectSection key={standards[subjectArray[0].standardID].subject}
                                subject={standards[subjectArray[0].standardID].subject}
                                student={student} latestAssessments={subjectArray} />
                        )
                    }
                </div>
            </section>
        )
    }
}


const filterLatestGradesPerAssessment = ( assessments, standards, subjects) => {
    //first find standards per subject
    const standardArray = convertObjToArray(standards);
    // console.log(standardArray);
    const latestArray = subjects.map( subject => {
        const standardIDsBySubject = filterIDsBySubject( subject, standardArray);
        // console.log(standardIDsBySubject)
        //after getting the IDs, we must pull the assessment objects
        var latestAssessmentsByStd = standardIDsBySubject.map( standardID => {
            const assessmentsFromStd = assessments[standardID];
            // console.log(assessmentsFromStd);
            return latestAssessmentFromSet(assessmentsFromStd);
            //time to turn each set of assessments into a an array and get the latest
        });
        return latestAssessmentsByStd.filter( assessment => assessment !== null );
        //now we have an array of assessments that are the latest per standard or a null value
    });
    // console.log(latestArray);
    return latestArray.filter(subArray => subArray.length > 0);
}

const latestAssessmentFromSet = ( assessments ) => {
    //object passed in are assessments
    // console.log(assessments);
    if( assessments === undefined || Object.keys(assessments).length === 0){
        return null;
    }
    else{
        const assessmentArray = convertObjToArray(assessments);
        return assessmentArray.sort(compareDateAscendingAssessments)[0];
    }
};

    

export default PopUpSideBar;