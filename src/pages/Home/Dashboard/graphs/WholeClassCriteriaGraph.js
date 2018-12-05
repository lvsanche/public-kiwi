import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { wholeClassCriteriaDataSetFormatter } from '../../../../services/dataFormatters/wholeClassFormatters/wholeClassCriteriaFormatter';


const graphOptions = ( numStudents ) => {
  return {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'How Students are performing at each standard graded in +, ~, -'
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: false,
          labelString: 'Standards at a glance',

        },
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of Students in each category'
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

const WholeClassCriteriaGraph = ({ students, assessments, standards}) => {

    const totalStudents = Object.keys(students).length;
    const completeDataSet = wholeClassCriteriaDataSetFormatter(students, standards, assessments);
    // console.log(completeDataSet);
    return ( <HorizontalBar data={completeDataSet} options={graphOptions(totalStudents)} />)
}


export default WholeClassCriteriaGraph;
