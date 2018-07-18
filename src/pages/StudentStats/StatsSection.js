import React from 'react';
import { filterBySubject, filterByAssessmentType } from '../../services/dataFormatters/filterBy';
import { convertObjToArray } from '../../services/dataFormatters/miscHelpers';
import CountingStandardStats from './Counting/CountingStats';
import CriteriaStandardStats from './Criteria/CriteriaStats';
import LetterStandardStats from './Letters/LetterStats';
const StatsSection = ({student, standards, assessments, subject}) => {
    const standardArray = convertObjToArray(standards);
    var subjectArray = filterBySubject(subject, standardArray);
    var countingStandards = filterByAssessmentType('counting', subjectArray);
    var criteriaStandards = filterByAssessmentType('criteria', subjectArray);
    var letterStandards = filterByAssessmentType('letterCounting', subjectArray);
    return (
        <div>
            <h3>{subject}</h3>
            {
                countingStandards.map( std =>
                    <CountingStandardStats
                                key={std.id}
								student={student}
								assessments={assessments}
                                standard={std}/>
                            )
            }
            {
                criteriaStandards.map( std =>
                    <CriteriaStandardStats
                                key={std.id}
                                student={student}
                                assessments={assessments}
                                standard={std}/>
                            )
            }
            {
                letterStandards.map( std =>
                    <LetterStandardStats
                                key={std.id}
                                student={student}
                                assessments={assessments}
                                standard={std}/>
                            )
            }
        </div>
    )
}

export default StatsSection;