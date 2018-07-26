import { createWholeDict, countingLabelMaker, randomBarColorMaker, countingFromString  } from './miscFormatters';
import { compareDateAscendingAssessments, convertObjToArray, compareDateDescendingAssessments} from './miscHelpers';

export const computeLatestDataSetFromCountingStandard = (student, standard, assessments) => {
    const assessmentsFromStandard = assessments[standard.standardID]; //obj with assessment ID as key
    const assessStdArray = convertObjToArray(assessmentsFromStandard);

    var dataSet = randomBarColorMaker('Numbers Known');
    var labels;
    var data;
    var maxNum = 20; //max counting number
    var title;

    if( assessStdArray.length === 0 ){
        dataSet['data'] = [];
        title = 'No assessments for '+ standard.standardName +' were found';
        labels = countingLabelMaker(maxNum);
        data = {
        'datasets': [dataSet],
        'labels' : labels
        };
    }
    else {
        assessStdArray.sort(compareDateDescendingAssessments);
        const latestAssess = assessStdArray[0];
        const countingDict = createWholeDict(student.grades[latestAssess.assessmentID]);
        dataSet['data'] = computeDataFromCountingDict(countingDict);
        title = "Counting for "+ standard.standardName + " was last assessed on "  + latestAssess.date;
        labels = countingLabelMaker(maxNum);
        data = {
            'datasets': [dataSet],
            'labels' : labels
        };
    }

    return {
        maxNum: maxNum,
        data: data,
        title: title
    };
};


//standard needed for title and other details
export const computeDataSetFromCountingAssessment = ( student, standard, assessment ) => {
  var dataSet = randomBarColorMaker('Numbers Known');

  const countingGrade = student.grades[assessment.assessmentID];
  dataSet['data']  = computeDataFromCountingDict(createWholeDict(countingGrade));

  const maxNum = dataSet['data'].length -1;
  
  var labels = countingLabelMaker(maxNum);
  
  const data = {
    'datasets': [dataSet],
    'labels' : labels
  }

  const title = "Counting for "+ standard.standardName + " was assessed on "  + assessment.date;

  return {
    maxNum: maxNum,
    data: data,
    title: title
  };
};

const computeDataFromCountingDict = ( countingGrade ) => {
    //get obj with grade from student
    const knownNumbers = Object.keys(countingGrade).map(parseFloat);
    const maxNum = Math.max(...knownNumbers);
    var countArray = new Array(maxNum+1).fill(0);
    knownNumbers.forEach( num => {
      countArray[num] = 1;
    });
    return countArray;
  } ;



export const computeProgressDataSetsFromCountingStandard = ( student, standard, assessments ) => {
  //need assessmentIDList and list of assessments
  //place to optimize
  const countArray = convertObjToArray(assessments[standard.standardID]);

  var sortedAssessments = countArray.sort(compareDateAscendingAssessments);

  //order the assessment ids by date given
  var labels = [];
  var data = [];
  sortedAssessments.forEach( assessment => {
    labels.push(assessment.date);
    //need to count the size of the input
    
    data.push(countingFromString(student.grades[assessment.assessmentID]));
     //data.push(student.grades[assessment.assessmentID]);
    // where we need to count the number they know data.push(student.grades[assessment.assessmentID] / maxGrade );
  });

  //depending of grading Type the graph might be different
  const dataSet = {
    labels: labels,
    datasets: [
      {
        label: 'Counting',
        backgroundColor: 'rgba(255,99,132,0.2)',
    		borderColor: 'rgba(255,99,132,1)',
    		borderWidth: 1,
    		hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    		hoverBorderColor: 'rgba(255,99,132,1)',
    		data: data
      }
    ]
  }

  return dataSet;
}
