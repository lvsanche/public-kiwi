import { randomBarColorMaker} from './miscFormatters';
import { compareDateAscendingAssessments, compareDateDescendingAssessments, convertObjToArray } from './miscHelpers';
import { filterByStandard } from './filterBy';

export const computeProgressDataSetsFromLetterStandard = (student, standard, assessments) => {
  const assessmentArray = convertObjToArray(assessments);
  const standardArray = filterByStandard(standard.id, assessmentArray);

  var sortedAssessments = standardArray.sort(compareDateAscendingAssessments);
 
  var labels = [];
  var data = [];
  sortedAssessments.forEach( assessment => {
      const { date, id } = assessment;
      const grade = student.grades[id];
      labels.push(date);
      var countKnown = 0;
      Object.keys(grade).forEach( letter => {
        if( grade[letter]){
          countKnown+=1;
        }
      })
      data.push(countKnown);
  });

  const dataSet = {
      labels: labels,
      datasets: [
        {
          label: 'Progress in Standard',
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
};


const alphabetLabels = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z'
];

export const computeLatestDataSetFromLetterStandard = (student, standard, assessments) => {
  const assessmentArray = convertObjToArray(assessments);
  const standardAssessArray = filterByStandard(standard.id, assessmentArray);
  const sortedAssessments = standardAssessArray.sort(compareDateDescendingAssessments);
  if( sortedAssessments.length > 0 ){
    //return the latest
    return computeDataSetFromLetterAssessment( student, sortedAssessments[0]);
  }
  else{
    const maxNum = alphabetLabels.length;
    var toRet = new Array(maxNum).fill(0);
    var dataSet = randomBarColorMaker(standard.standardName);
    dataSet['data'] = toRet;
    
    const data = {
        'datasets': [dataSet],
        'labels': alphabetLabels
    }

    return {
      'data': data,
      'maxNum': maxNum
    };
  }

};

export const computeDataSetFromLetterAssessment = (student, assessment) => {
  //find if the maxGrade is number or + }
  const { standardName, id } = assessment;
  const grade = student.grades[id] // this is an object with letters as keys
  var dataSet = randomBarColorMaker(standardName);

  dataSet['data'] = convertLetterObjToData(grade);

  const data = {
      'datasets': [dataSet],
      'labels': alphabetLabels
  }
  return {
      data: data,
      date: assessment.date
  }
}

const convertLetterObjToData = ( letters ) => {
  const letterArray = Object.keys(letters).filter( letter => letters[letter] );
  const maxNum = alphabetLabels.length;
  var toRet = new Array(maxNum).fill(0);
  //subtract the 65 for ascii 'a'
  letterArray.forEach( letter => {
    //must watch out of ene
    var letterIndex = letter.charCodeAt(0) - 97; // lower case letters being used 
    
    if ( letterIndex >= 14 ){
      toRet[letterIndex+1] = 1;
    }
    else if (letterIndex === 112) {
      toRet[14] = 1;
    } //special case
    else{
      toRet[letterIndex] = 1;
    }

  });
  return toRet;
};