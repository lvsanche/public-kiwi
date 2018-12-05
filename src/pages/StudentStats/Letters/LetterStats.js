import React from 'react';
import StudentLetterProgressGraph from './graphs/StudentLetterProgressGraph';
import InteractiveLetterGraph from './graphs/InteractiveLetterGraph';

export const LetterStandardStats = ({student, assessments, standard} ) => 
    <div className="standardSection">
        <div className="linkAnchor"><span id={standard.standardName}></span></div>
        <h4>{standard.standardName}</h4>
        <div className="graphSection">
            <section className="statGraphContainer">
                <StudentLetterProgressGraph student={student} assessments={assessments} standard={standard}/>
            </section>
            <section className="statGraphContainer">
                <InteractiveLetterGraph student={student} assessments={assessments} standard={standard} />
            </section>
        </div>
    </div>


export default LetterStandardStats;