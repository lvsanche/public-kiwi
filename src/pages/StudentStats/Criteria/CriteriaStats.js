import React from 'react';
import StudentCriteriaProgressGraph from "./graphs/StudentCriteriaProgressGraphContainer";
import InteractiveCriteriaGraph from "./graphs/InteractiveCriteriaGraph";

const CriteriaStandardStats = ({student, assessments, standard} ) => 
    <div className="standardSection">
        <div className="linkAnchor"><span id={standard.standardName}></span></div>
        <h4>{standard.standardName}</h4>
        <div className="graphSection">
            <section className="statGraphContainer">
                <StudentCriteriaProgressGraph student={student} assessments={assessments} standard={standard}/>
            </section>
            <section className="statGraphContainer">
                <InteractiveCriteriaGraph student={student} assessments={assessments} standard={standard} />
            </section>
        </div>
    </div>

export default CriteriaStandardStats;