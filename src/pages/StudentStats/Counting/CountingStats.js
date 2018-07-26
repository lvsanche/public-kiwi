import React from 'react';
import InteractiveCountingGraph from './graphs/InteractiveCountingGraph';
import StudentCountingProgressGraph from './graphs/StudentCountingProgressGraph';

export const CountingStandardStats = ({student, assessments, standard} ) => 
    <div className="standardSection">
        <div className="linkAnchor"><span id={standard.standardName}></span></div>
        <h4>{standard.standardName}</h4>
        <div className="graphSection">
            <section className="statGraphContainer">
                <StudentCountingProgressGraph student={student} assessments={assessments} standard={standard}/>
            </section>
            <section className="statGraphContainer">
                <InteractiveCountingGraph student={student} assessments={assessments} standard={standard} />
            </section>
        </div>
        
    </div>


// const CountingStats = ({student, assessments, standards}) => {
//     //get make sections of standard
//     const countingStandardsIDs = Object.keys(standards)
//         .filter(stdID => standards[stdID].gradeType === 'counting');
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