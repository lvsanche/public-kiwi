import React from 'react';
import StudentLetterProgressGraph from './graphs/StudentLetterProgressGraph';
import InteractiveLetterGraph from './graphs/InteractiveLetterGraph';

export const LetterStandardStats = ({student, assessments, standard} ) => 
    <div>
        <h4 id={standard.standardName}>{standard.standardName}</h4>
        <section className='leftStats'>
            <StudentLetterProgressGraph student={student} assessments={assessments} standard={standard}/>
        </section>
        <section className='rightStats'>
            <InteractiveLetterGraph student={student} assessments={assessments} standard={standard} />
        </section>
    </div>


export default LetterStandardStats;