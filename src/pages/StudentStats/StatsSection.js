import React from 'react';
import { filterBySubject, filterByGradeType } from '../../services/dataFormatters/filterBy';
import { convertObjToArray } from '../../services/dataFormatters/miscHelpers';
import CountingStandardStats from './Counting/CountingStats';
import CriteriaStandardStats from './Criteria/CriteriaStats';
import LetterStandardStats from './Letters/LetterStats';

const StatsSection = ({student, standards, assessments, subject}) => {
    const standardArray = convertObjToArray(standards);
    var subjectArray = filterBySubject(subject, standardArray);

    var countingStandards = filterByGradeType('counting', subjectArray);
    var criteriaStandards = filterByGradeType('criteria', subjectArray);
    var letterStandards = filterByGradeType('letterCounting', subjectArray);
    return (
        <div className="subjectSection">
            <div className="card-title"><h2>{subject}</h2></div>
            {
                countingStandards.map( standard =>
                    <CountingStandardStats
                                key={standard.standardID}
                                student={student}
                                assessments={assessments}
                                standard={standard}/>
                            )
            }
            {
                criteriaStandards.map( standard =>
                    <CriteriaStandardStats
                                key={standard.standardID}
                                student={student}
                                assessments={assessments}
                                standard={standard}/>
                            )
            }
            {
                letterStandards.map( standard =>
                    <LetterStandardStats
                                key={standard.standardID}
                                student={student}
                                assessments={assessments}
                                standard={standard}/>
                            )
            }

            
        </div>
    )
}


            
export default StatsSection;