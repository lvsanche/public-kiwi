import { findNewestAssessment, randomBarColorMaker, barColorSelector } from "../miscFormatters";

//method returns a complete data set
export const wholeClassBarDataFormatter = (studentList, standards, assessments ) => {
    //first get the standards that have to do with Letters
    const letStds = Object.keys(standards).filter(
      stdID => standards[stdID].assessmentType === 'letterCounting' );

    const students = Object.keys(studentList).map( id => studentList[id]);
    const arrayOfDataSets = letStds.map( (stdID, index) =>
      computeWholeClassLatestDataSetFromLetterStandard(assessments, students, stdID, standards[stdID].standardName, index)
    );

    // Now all the counters are in an array
    const alphabetLabels = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z'
    ];

    const completeDataSet = {
      'labels': alphabetLabels,
      'datasets': arrayOfDataSets
    };

    return completeDataSet;
};

//students is an array of student objects
const computeWholeClassLatestDataSetFromLetterStandard = (assessments, students, standardID, standardName, color) => {
    //getting array of assessments of matching standard
    const assessmentIDs = Object.keys(assessments).filter(
      (asID) => assessments[asID].standardID === standardID );

    //find the latest of the assessment if more than one exists
    var newestAssess;
    if ( assessmentIDs.length > 1){
      newestAssess = findNewestAssessment(assessmentIDs, assessments);
    }
    else if( assessmentIDs.length === 1){
      newestAssess = assessmentIDs[0];
    }
    else{
      //must have 0 data
      var emptyDataSet = barColorSelector(standardName, color);
      emptyDataSet['data'] = []
      return emptyDataSet;
    }

    //long loop here will be 3X slow
    //continue with newestAssess
    var counter = { a: 0, b:0, c:0, d:0, e:0, 
      f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0,
      n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0,
      v:0, w:0, x:0, y:0, z:0, ñ:0 };

    students.forEach( (student) => {
      var letters = student.grades[newestAssess]; //letters obj
      for ( var letter in letters){
        if ( letters[letter]){
          counter[letter]+=1;
        }
      }
    });

    var dataSet = barColorSelector(standardName, color);
    const data = Object.keys(counter).map ( (letter) => counter[letter]);
    dataSet['data'] = data;
    return dataSet;
  };
  