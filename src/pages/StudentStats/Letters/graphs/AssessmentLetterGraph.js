import React from 'react';
import { Bar } from 'react-chartjs-2';
import { computeDataSetFromLetterAssessment, 
  computeLatestDataSetFromLetterStandard } from '../../../../services/dataFormatters/LetterDataFormatters';

  const graphOptions = ( ) => {
    return {
      title: {
        display: false,
        text: ''
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Letters Student Knows'
          },
          ticks: {
              max: 1,
              min: 0,
              stepSize: 1
          }
        }]
      }
    }
  };


const AssessmentLetterGraph = ({student, assessmentID, assessments, standard}) => {

  const { data } = (assessmentID === 'latest')
    ? computeLatestDataSetFromLetterStandard(student, standard, assessments)
    : computeDataSetFromLetterAssessment(student, assessments[assessmentID]);
  return(
    <div>
      <Bar data={data} options={graphOptions()} />
    </div>

  )
};

export default AssessmentLetterGraph;