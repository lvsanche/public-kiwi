import React from 'react';
import StudentCriteriaProgressGraph from "./graphs/StudentCriteriaProgressGraphContainer";
import InteractiveCriteriaGraph from "./graphs/InteractiveCriteriaGraph";

const CriteriaStandardStats = ({student, assessments, standard} ) => 
    <div>
        <h4 id={standard.standardName}>{standard.standardName}</h4>
        <section className='leftStats'>
            <StudentCriteriaProgressGraph student={student} assessments={assessments} standard={standard}/>
        </section>
        <section className='rightStats'>
            <InteractiveCriteriaGraph student={student} assessments={assessments} standard={standard} />
        </section>
    </div>

export default CriteriaStandardStats;