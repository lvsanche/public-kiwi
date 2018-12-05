import { barColorSelector } from "../miscFormatters";
import { convertObjToArray } from "../miscHelpers";
import { filterIDsByGradeType } from '../filterBy';
import { compareDateDescendingAssessments } from '../miscHelpers'; 
<<<<<<< HEAD
// import { graphData } from '../../api/db';
=======
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d

//method returns a complete data set
export const wholeClassBarDataFormatter = (studentList, standards, assessments ) => {
    //first get the standards that have to do with Letters
    const letterStandards = convertObjToArray(standards)
    const filteredStandardIDs = filterIDsByGradeType('letterCounting', letterStandards);

    const students = convertObjToArray(studentList);
<<<<<<< HEAD
    const arrayOfDataSets = filteredStandardIDs.map( (standardID, index) => {
      var datasetPerStd = computeWholeClassLatestDataSetFromLetterStandard(assessments[standardID], students, standards[standardID].standardName, index+3) // changing color scheme
      // graphData.postLetterGraphDataset(datasetPerStd, standardID).catch( e => console.log(e) );
      
      return datasetPerStd;
    });
=======
    const arrayOfDataSets = filteredStandardIDs.map( (standardID, index) =>
      computeWholeClassLatestDataSetFromLetterStandard(assessments[standardID], students, standards[standardID].standardName, index)
    );
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d

    // Now all the counters are in an array
    const alphabetLabels = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const completeDataSet = {
      'labels': alphabetLabels,
      'datasets': arrayOfDataSets
    };

    return completeDataSet;
};

export const updateLetterGraphDatasets = (newAssessment, lastAssessment ) => {
  //first check if the new change in the assessment is 
  if ( newAssessment.date > lastAssessment.date ){
    
  }
}; 

//students is an array of student objects
const computeWholeClassLatestDataSetFromLetterStandard = (assessments, students, standardName, color) => {
    //getting array of assessments of matching standard
    const assessmentsArray = convertObjToArray(assessments);
    var sortedAssessArray = assessmentsArray.sort( compareDateDescendingAssessments);
    //find the latest of the assessment if more than one exists

    var newestAssess;
    if ( sortedAssessArray.length > 0){
      newestAssess = sortedAssessArray[0];
    }
    else{
      //must have 0 data
      var emptyDataSet = barColorSelector(standardName, color);
      emptyDataSet['data'] = []
      return emptyDataSet;
    }

    
    var counter = new Array(27).fill(0);  

    students.forEach( (student) => {
<<<<<<< HEAD
      var letters = convertObjToArray(student.grades[newestAssess.assessmentID]); //letters obj
      letters.forEach(
        (value, index) => {
            if ( value ){
              counter[index]+=1;
            }
=======
      var letters = student.grades[newestAssess.assessmentID]; //letters obj
      for ( var letter in letters){
        if ( letters[letter]){
          counter[letter]+=1;
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
        }
      )
    });

    var dataSet = barColorSelector(standardName, color);
    const data = Object.keys(counter).map ( (letter) => counter[letter]);
    dataSet['data'] = data;
    return dataSet;
  };
  