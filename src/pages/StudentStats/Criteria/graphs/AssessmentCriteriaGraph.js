import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { computeDataSetFromCriteriaAssessment, 
  computeLatestDataSetFromCriteriaStandard } from '../../../../services/dataFormatters/CriteriaDataFormatters';

  const graphOptions = ( standardName, date ) => {
    return {
      title: {
        display: false,
        text: 'Level of understanding for: '+standardName +' on ' + date
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Level Students grasp Standard'
          },
          ticks: {
              max: 2,
              min: 0,
              stepSize:1
          }
        }]
      }
    }
  };


const AssessmentCriteriaGraph = ({student, assessmentID, assessments, standard}) => {
    const {standardName} = standard;

    const {data, date } = (assessmentID === 'latest') ? 
      computeLatestDataSetFromCriteriaStandard(student, standard, assessments)
      : computeDataSetFromCriteriaAssessment(student, assessments[assessmentID]) ;
    
    return(
        <div>
            <HorizontalBar data={data} options={graphOptions(standardName, date)} />
        </div>

    )
};

export default AssessmentCriteriaGraph;