import React from 'react';
import { Bar } from 'react-chartjs-2';
import { computeLatestDataSetFromCountingStandard } from '../../../../services/dataFormatters/CountingDataFormatters';

const graphOptions = (maxNum, title) => {
  return {
    title:{
      display: true,
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
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'vertical',
            value: .5,
            borderWidth: 2,
            borderColor: 'rgba(189, 189, 189, 0.5)',
          }
        ]
      },
    }
  }
};


const LatestCountingGraph = ({student, assessments, standard}) => {
  const { data, title, maxNum } = computeLatestDataSetFromCountingStandard(student, standard, assessments);
  return(
    <div>
      <Bar data={data} options={graphOptions(maxNum, title)} />
    </div>

  )
};

export default LatestCountingGraph;
