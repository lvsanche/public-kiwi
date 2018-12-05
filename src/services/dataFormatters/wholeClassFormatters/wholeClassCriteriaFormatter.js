import { convertObjToArray, compareDateDescendingAssessments, convertCriteriaGradeToNumber, compareAlphaAscendingStandardNames } from "../miscHelpers";
import { filterByGradeType } from "../filterBy";
<<<<<<< HEAD
import { barColorSelector } from "../miscFormatters";
=======
import { barColorMaker } from "../miscFormatters";
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d



export const wholeClassCriteriaCounter = (studentList, standards, assessments) => {
    //get standardIDs that are criteria based
    const standardsArray = convertObjToArray(standards);
    // const assessArray = convertObjToArray(assessments);
<<<<<<< HEAD
=======

    const criteriaStandards = filterByGradeType('criteria', standardsArray);
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d

    const criteriaStandards = filterByGradeType('criteria', standardsArray);
    var assessIDByStandard = {};
    criteriaStandards.forEach( standard => {
        // assessIDByStandard[standard.standardID] = filterByStandard(standard.standardID, assessArray).sort(compareDateDescendingAssessments);
        assessIDByStandard[standard.standardID] = convertObjToArray(assessments[standard.standardID]).sort(compareDateDescendingAssessments);
    });
    //at [0] for the keys, we have the newest assessment of each standard
    //index 0 will be students with a 0 in their grade
    // index 1 will be students with a 1 in their grade
    const counter = [0,0,0];    
    var countByAssessment = {};
    Object.keys(assessIDByStandard).forEach(
        stdID => {
            if ( assessIDByStandard[stdID].length > 0 ){
                const latestAssessment = assessIDByStandard[stdID][0];
                const objInner = Object.assign( {}, {[latestAssessment.assessmentID]: counter.slice()})
                countByAssessment[stdID]= objInner;
            }
        }
    )

<<<<<<< HEAD
=======

>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
    //ready to go count
    const studentsArray = convertObjToArray(studentList);
    studentsArray.forEach( student => {
        const { grades } = student;
        Object.keys(countByAssessment).forEach( stdID => {
            const assessmentID = Object.keys(countByAssessment[stdID])[0];
            const assessGrade = convertCriteriaGradeToNumber( assessments[stdID][assessmentID].maxGrade, grades[assessmentID]);
            countByAssessment[stdID][assessmentID][assessGrade]+=1; //increment the count
        });
    })
<<<<<<< HEAD

    return countByAssessment; // obj with standardID as key, with array of count 
}


export const wholeClassCriteriaTableFormatter = ( studentList, standards, assessments) => {
    const countByAssessment = wholeClassCriteriaCounter(studentList, standards, assessments);
    //use standards to get them in alphabetical order
    var standardsWithCount = Object.keys(countByAssessment).map( stdID => standards[stdID]);

    standardsWithCount.sort(compareAlphaAscendingStandardNames);

    var arrayOfObjs = [];
    
    //now that assessments are ordered we can create the labels
    standardsWithCount.forEach( standard => {
        const { standardID, standardName} = standard;
        const assessmentID = Object.keys(countByAssessment[standardID])[0];
        const { date } = assessments[standardID][assessmentID];
        
        const currentCount = countByAssessment[standardID][assessmentID];
        const totalStudents = currentCount[0] + currentCount[1] + currentCount[2];


        const passPercent = currentCount[2] / totalStudents;
        const failPercent = 1 - passPercent;

        const newObj = {
            'standardName': standardName,
            'date': date,
            'passPercent': passPercent,
            'failPercent': failPercent
        };
        arrayOfObjs.push(newObj);
    });

    
   return arrayOfObjs;
   //returned value will be an array with objects. Each obj will have the standardID, dateofAssessment, passing and failing percent

}


//will take all standards, get they ones that are 
export const wholeClassCriteriaDataSetFormatter = (studentList, standards, assessments) => {
    

    const countByAssessment = wholeClassCriteriaCounter( studentList, standards, assessments);
    
=======
    // console.log(countByAssessment);
    // array of 3 values per assessment ID exist
    //must create a dataSet per -, ~, + grades and labels
    //lets order the assessment IDs by subject and then in descending assessment date 

    // seperate standards by subject: 1. math 2. languageReading 3. motorSkills 4. socialEmotional
    //TODO idea to seperate/distinguish the datasets via a 
    // var latestAssessments = Object.keys(countByAssessment).map( stdID => Object.keys(assessments[stdID]).map( assessmentID => assessments[stdID][assessmentID]) );
    // const subjects = ['math', 'languageReading', 'motorSkills', 'socialEmotional'];
    // console.log(latestAssessments);
    // const orderedAssessmentsArrays = subjects.map(
    //     sub => filterBySubject(sub, latestAssessments).sort(compareAlphaAscendingStandardNames)
    // )

>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
    //use standards to get them in alphabetical order
    var standardsWithCount = Object.keys(countByAssessment).map( stdID => standards[stdID]);
    standardsWithCount.sort(compareAlphaAscendingStandardNames);


    var standardLabels = [];
    var orderedStandardIDs = [];
   //now that assessments are ordered we can create the labels
   standardsWithCount.forEach( standard => {
        orderedStandardIDs.push(standard.standardID);
        standardLabels.push(standard.standardName)
   });
   
   const indexes = [0,1,2];
   const dataSets = indexes.map( index => {
       const wholeIndexValues = orderedStandardIDs.map( standardID => 
       countByAssessment[standardID][Object.keys(countByAssessment[standardID])[0]][index]);

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
       var dataSet = barColorSelector(category, index);
       dataSet['data']= wholeIndexValues;
       return dataSet;
    })

    return {
        'labels': standardLabels,
        'datasets': dataSets
    }

};
