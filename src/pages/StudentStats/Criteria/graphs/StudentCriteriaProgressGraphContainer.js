import React from 'react';
import { Line } from 'react-chartjs-2';
import { computeProgressDataSetsFromCriteriaStandard } from '../../../../services/dataFormatters/CriteriaDataFormatters';

const options = (student, standardName) => {
  return {
    title: {
      display: false,
      text: 'Assessment of '+student.firstName+' '+student.lastName +' for: '+ standardName
    },
    scales: {
      xAxes:[{
        scaleLabel: {
          display: true,
          labelString: 'Dates of Assessments'
        }
      }],
      yAxes:[{
        scaleLabel: {
          display: true,
          labelString: 'Level of Application'
        },
        ticks: {
          max: 2,
          min: 0,
          stepSize:1
        }
      }]
    }
  };
}


const StudentCriteriaProgressGraph = ( {student, standard, assessments } ) => {
  const dataSet = computeProgressDataSetsFromCriteriaStandard(student, standard, assessments);
  
  return (
    <Line data={dataSet} options={options(student, standard.standardName)}/>
  )
}
export default StudentCriteriaProgressGraph;
