import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { wholeClassBarDataFormatter } from '../../../../services/dataFormatters/wholeClassFormatters/wholeClassLetterFormatter';

const graphOptions = ( numStudents ) => {
  return {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Letters Known by Students'
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: false,
          labelString: 'Letters',

        },
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of Students that know the letter'
        },
        ticks: {
            max: numStudents,
            min: 0,
            stepSize: 1
        }
      }]
    }
  }
};

const WholeClassLetterBarGraph = ({ students, assessments, standards}) => {

    const totalStudents = Object.keys(students).length;
    const completeDataSet = wholeClassBarDataFormatter(students, standards, assessments);

    return ( <HorizontalBar data={completeDataSet} options={graphOptions(totalStudents)} />)
}


export default WholeClassLetterBarGraph;
