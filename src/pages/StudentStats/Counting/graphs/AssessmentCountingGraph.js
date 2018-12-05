import React from 'react';
import { Bar } from 'react-chartjs-2';
import { computeDataSetFromCountingAssessment, 
  computeLatestDataSetFromCountingStandard } from '../../../../services/dataFormatters/CountingDataFormatters';

const graphOptions = (maxNum, title) => {
  return {
    title:{
      display: false,
      text: title
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Knows'
        },
        ticks: {
          max: 1,
          min: 0,
          stepSize:1
        }
      }],
      xAxes: [{
        categoryPercentage: 1,
        scaleLabel: {
          display: true,
          labelString: 'Numbers'
        },
        ticks: {
            max: maxNum,
            min: 0,
            stepSize:1
        }
      }],
      
    }
  }
};


const AssessmentCountingGraph = ({student, assessmentID, assessments, standard}) => {
  
  const { data, title, maxNum } = (assessmentID === 'latest')
    ? computeLatestDataSetFromCountingStandard(student, standard, assessments)
    : computeDataSetFromCountingAssessment(student, standard, assessments[standard.standardID][assessmentID]);


  return(
    <div>
      <Bar data={data} options={graphOptions(maxNum, title)} />
    </div>

  )
};

export default AssessmentCountingGraph;
