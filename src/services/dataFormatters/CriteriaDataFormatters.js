import { randomBarColorMaker } from "./miscFormatters";
import { convertObjToArray, convertCriteriaGradeToNumber,
    compareDateDescendingAssessments, compareDateAscendingAssessments } from "./miscHelpers";
import { filterByStandard } from "./filterBy";


export const computeProgressDataSetsFromCriteriaStandard = (student, standard, assessments) => {
    const assessmentArray = convertObjToArray(assessments);
    const standardArray = filterByStandard(standard.id, assessmentArray);

    var sortedAssessments = standardArray.sort(compareDateAscendingAssessments);

    var labels = [];
    var data = [];
    sortedAssessments.forEach( assessment => {
        const { date, maxGrade, id } = assessment;
        const grade = student.grades[id];
        
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
    const assessmentArray = convertObjToArray(assessments);
    var sortedAssessArray = filterByStandard(standard.id, assessmentArray).sort( compareDateDescendingAssessments);
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
    const { maxGrade, standardName, id } = assessment;
    const grade = student.grades[id]
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
