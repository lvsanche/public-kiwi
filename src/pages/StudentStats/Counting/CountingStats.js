import React from 'react';
import InteractiveCountingGraph from './graphs/InteractiveCountingGraph';
import StudentCountingProgressGraph from './graphs/StudentCountingProgressGraph';

export const CountingStandardStats = ({student, assessments, standard} ) => 
    <div>
        <h4 id={standard.standardName}>{standard.standardName}</h4>
        <section className='leftStats'>
            <StudentCountingProgressGraph student={student} assessments={assessments} standard={standard}/>
        </section>
        <section className='rightStats'>
            <InteractiveCountingGraph student={student} assessments={assessments} standard={standard} />
        </section>
    </div>


// const CountingStats = ({student, assessments, standards}) => {
//     //get make sections of standard
//     const countingStandardsIDs = Object.keys(standards)
//         .filter(stdID => standards[stdID].assessmentType === 'counting');
//     return (
//         <div>
//             {
//                 countingStandardsIDs.map( stdID => <CountingStandardStats key={stdID} student={student} 
//                                 assessments={assessments} standard={standards[stdID]} />)
//             }
//         </div>
//     )
// }

export default CountingStandardStats;