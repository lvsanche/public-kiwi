import React from 'react';
import { Line } from 'react-chartjs-2'
import { computeProgressDataSetsFromCountingStandard } from '../../../../services/dataFormatters/CountingDataFormatters';

const options = (student) => {
  return {
    title: {
      display: false,
      text: 'Graph of counting progress by '+student.firstName+' '+student.lastName
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
          labelString: 'Numbers Known'
        },
        ticks: {
          stepSize:1
        }
      }],
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'horizontal',
          value: 20,
          borderWidth: 1
        }
      ]
    }
  }
};

const StudentCountingProgressGraph = ( { student, assessments, standard } ) => {
  const dataSet = computeProgressDataSetsFromCountingStandard(student, standard, assessments);
  return (
    <Line data={dataSet} options={options(student)}/>
  )
}

export default StudentCountingProgressGraph;
