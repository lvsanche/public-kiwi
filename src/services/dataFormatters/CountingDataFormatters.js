import { findNewestAssessment, countingLabelMaker, randomBarColorMaker } from './miscFormatters';
import { compareDateAscendingAssessments, getAssessmentArrayByStandard} from './miscHelpers';

export const computeLatestDataSetFromCountingStandard = (student, standard, assessments) => {
  const { standardName } = standard;
  const standardID = standard.id;

  const countArray = getAssessmentArrayByStandard(assessments,standardID);
  const assessmentIDList = countArray.map( assessment => assessment.id)
  //get the latest of the assessments
  var latestCountID;
  var dataSet = randomBarColorMaker('Numbers Known');
  var labels;
  var data;
  var maxNum;
  var title;

  if( assessmentIDList.length >= 1){
    latestCountID = findNewestAssessment(assessmentIDList, assessments);
    const latestCount = student.grades[latestCountID];
    if ( typeof latestCount === 'undefined'){
      dataSet['data'] = [];
      maxNum = 20;
      title = 'Grade not found for student';
      labels = countingLabelMaker(maxNum);

      data = {
        'datasets': [dataSet],
        'labels' : labels
      };

    }
    else{
      title = "Counting for "+ standardName + " was last assessed on "  + assessments[latestCountID].date;
      dataSet['data'] = computeDataFromCountingAsssessment(student, latestCountID);
      labels = countingLabelMaker(dataSet['data'].length - 1);
      data = {
        'datasets': [dataSet],
        'labels' : labels
      }
    }
  }
  else{
    dataSet['data'] = [];
    maxNum = 20;
    title = 'No assessments for '+ standardName+' were found';
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
  dataSet['data']  = computeDataFromCountingAsssessment(student, assessment.id);

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


//data set returned is an array of 0,1 for which index is the number that is known or not
const computeDataFromCountingAsssessment = ( student, assessmentID ) => {
  //get obj with grade from student
  const countingGrade = student.grades[assessmentID];
  const knownNumbers = Object.keys(countingGrade).map(parseFloat);
  const maxNum = Math.max(...knownNumbers);
  var countArray = new Array(maxNum+1).fill(0);
  knownNumbers.forEach( num => {
    countArray[num] = 1;
  });
  return countArray;
} ;



export const computeProgressDataSetsFromCountingStandard = ( student, standard, assessments ) => {
  const assessmentsArray = Object.keys(assessments).map( (asID) => {
    return assessments[asID]
  });

  //need assessmentIDList and list of assessments
  //place to optimize
  const countArray = assessmentsArray.filter( assess => assess.standardID === standard.id);

  var sortedAssessments = countArray.sort(compareDateAscendingAssessments);

  //order the assessment ids by date given
  var labels = [];
  var data = [];
  sortedAssessments.forEach( assessment => {
    labels.push(assessment.date);
    data.push(Object.keys(student.grades[assessment.id]).length);
     //data.push(student.grades[assessment.id]);
    // where we need to count the number they know data.push(student.grades[assessment.id] / maxGrade );
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
