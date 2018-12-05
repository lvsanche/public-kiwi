import { randomBarColorMaker } from "./miscFormatters";
import { convertObjToArray, convertCriteriaGradeToNumber,
    compareDateDescendingAssessments, compareDateAscendingAssessments } from "./miscHelpers";


export const computeProgressDataSetsFromCriteriaStandard = (student, standard, assessments) => {
<<<<<<< HEAD
=======
    // const assessmentArray = convertObjToArray(assessments);
    // const standardArray = filterByStandard(standard.standardID, assessmentArray);
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
    const assessmentsFromStandard = assessments[standard.standardID];
    const standardArray = convertObjToArray(assessmentsFromStandard);
    
    var sortedAssessments = standardArray.sort(compareDateAscendingAssessments);
    var labels = [];
    var data = [];

    sortedAssessments.forEach( assessment => {
        const { date, maxGrade, assessmentID } = assessment;
        const grade = student.grades[assessmentID];
<<<<<<< HEAD
=======
        
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
        var gradeVal = convertCriteriaGradeToNumber(maxGrade, grade);
        
        labels.push(date);
        data.push(gradeVal);
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
}

export const computeLatestDataSetFromCriteriaStandard = (student, standard, assessments) => {
    //find the correct assessment and call computeDataSetFromCriteriaAssessment
    //get assessments of the same standard
    const assessmentArray = convertObjToArray(assessments[standard.standardID]);
    var sortedAssessArray = assessmentArray.sort( compareDateDescendingAssessments);

    if( sortedAssessArray.length > 0){
        return computeDataSetFromCriteriaAssessment( student, sortedAssessArray[0]);
    }
    else {
        var empty = randomBarColorMaker('NO ASSESSMENT FOUND');
        empty['data'] = [];
        return {
            data: {
                'datasets': [empty],
                'labels': []
            },
            date: ''
        }
    }
    
}

export const computeDataSetFromCriteriaAssessment = (student, assessment) => {
    //find if the maxGrade is number or + }
    const { maxGrade, standardName, assessmentID } = assessment;
    const grade = student.grades[assessmentID]
    var dataSet = randomBarColorMaker(standardName);
    dataSet['data'] = [convertCriteriaGradeToNumber(maxGrade, grade)]

    const labels = []
    const data = {
        'datasets': [dataSet],
        'labels': labels
    }
    
    return {
        data: data,
        date: assessment.date
    }
}
