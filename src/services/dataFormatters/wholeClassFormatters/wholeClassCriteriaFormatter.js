import { convertObjToArray, compareDateDescendingAssessments, convertCriteriaGradeToNumber, compareAlphaAscendingStandardNames } from "../miscHelpers";
import { filterByAssessmentType, filterByStandard, filterBySubject } from "../filterBy";
import { barColorMaker } from "../miscFormatters";

//will take all standards, get they ones that are 
export const wholeClassCriteriaDataSetFormatter = (studentList, standards, assessments) => {
    //get standardIDs that are criteria based
    const standardsArray = convertObjToArray(standards);
    const assessArray = convertObjToArray(assessments);

    const criteriaStandards = filterByAssessmentType('criteria', standardsArray);

    var assessIDByStandard = {};
    criteriaStandards.forEach( standard => {
        assessIDByStandard[standard.id] = filterByStandard(standard.id, assessArray).sort(compareDateDescendingAssessments);
    });
    //at [0] for the keys, we have the newest assessment of each standard

    //index 0 will be students with a 0 in their grade
    // index 1 will be students with a 1 in their grade
    const counter = [0,0,0];    
    var countByAssessment = {};
    Object.keys(assessIDByStandard).filter( stdID => assessIDByStandard[stdID].length > 0 ).forEach(
        stdID => {
            const assessArray = assessIDByStandard[stdID][0]
            countByAssessment[assessArray.id] = counter.slice();
        }
    )

    
    //ready to go count
    const studentsArray = convertObjToArray(studentList);
    studentsArray.forEach( student => {
        const { grades } = student;
        Object.keys(countByAssessment).forEach( assessID => {
            const assessGrade = convertCriteriaGradeToNumber( assessments[assessID].maxGrade, grades[assessID]);
            countByAssessment[assessID][assessGrade]+=1; //increment the count
        });
    })
    // array of 3 values per assessment ID exist
    //must create a dataSet per -, ~, + grades and labels
    //lets order the assessment IDs by subject and then in descending assessment date 

    // seperate standards by subject: 1. math 2. languageReading 3. motorSkills 4. socialEmotional
    var latestAssessments = Object.keys(countByAssessment).map( assessID => assessments[assessID]);
    const subjects = ['math', 'languageReading', 'motorSkills', 'socialEmotional'];
    
    const orderedAssessmentsArrays = subjects.map(
        sub => filterBySubject(sub, latestAssessments).sort(compareAlphaAscendingStandardNames)
    )

    var standardLabels = [];
    var orderedAssessmentIDs = [];
   //now that assessments are ordered we can create the labels
   orderedAssessmentsArrays.forEach( assessArray => {
       assessArray.forEach( assess => {
           orderedAssessmentIDs.push(assess.id);
           standardLabels.push(assess.standardName)
        })
   });
   
   const indexes = [0,1,2];
   const dataSets = indexes.map( index => {
       const wholeIndexValues = orderedAssessmentIDs.map( assessID => countByAssessment[assessID][index]);
       var category;
       switch( index ){
            case 0:
                category = 'Not Yet';
                break;
            case 1:
                category = 'Sometimes';
                break;
            case 2:
                category = 'Applying';
                break;
            default:
                category = 'Some Error';

       }
       var dataSet = barColorMaker(category, index);
       dataSet['data']= wholeIndexValues;
       return dataSet;
    })

    return {
        'labels': standardLabels,
        'datasets': dataSets
    }

};
