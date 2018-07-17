import React, {Component} from 'react';
import { convertObjToArray, compareDateAscendingAssessments } from '../../../services/dataFormatters/miscHelpers';
import { filterBySubject } from '../../../services/dataFormatters/filterBy';
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
        const { student, assessments } = this.props;
        const subjects = ['math', 'languageReading', 'motorSkills', 'socialEmotional'];
        const stdArray = createLatestUniqueAssessmentObj(assessments, subjects);
      
        return(
            <section>
                <button className="popUpBtn" onClick={this.handlePopUp}>Open Pop Up</button>
                <div className="popUp" style={this.state}>
                    {
                        stdArray.map( subjectArray => 
                            <SubjectSection key={subjectArray[0].subject} student={student} latestAssessments={subjectArray} />
                        )
                    }
                </div>
            </section>
        )
    }
}



const uniqueStandardIDs = ( assessmentArray ) => {
    const unique = {};
    assessmentArray.forEach( assessment => {
        unique[assessment.standardID] = true
    });
    return Object.keys(unique);
}


const createLatestUniqueAssessmentObj = ( assessmentList, subjects) => {
    //first find the arrays that belong to the subject
    const assessmentArray = convertObjToArray(assessmentList);
    var stdObj = {}
    subjects.forEach( sub => {
        const assessmentsBySubject = filterBySubject(sub, assessmentArray);
        const stdsInSubject = uniqueStandardIDs(assessmentsBySubject);
        stdObj[sub] = stdsInSubject;
        var asIDByStd = {};
        stdsInSubject.forEach( stdID => {
            asIDByStd[stdID] = assessmentsBySubject.filter(
                assessment => assessment.standardID === stdID)
                .sort(compareDateAscendingAssessments);
            if(asIDByStd[stdID].length > 0){
                asIDByStd[stdID]= asIDByStd[stdID][0]
            }
            else {
                delete asIDByStd[stdID];
            }
        })

        stdObj[sub] = asIDByStd; // now all is set by subject      
    })

    //convert obj to array of arrays

    const neA = Object.keys(stdObj).map( sub => {
        var subAr = Object.keys(stdObj[sub]).map( stdID => stdObj[sub][stdID])
        return subAr;
    })

    return neA.filter( a => a.length > 0);
}


    

export default PopUpSideBar;