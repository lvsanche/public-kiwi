import React from 'react';
import './PopUpGrades.css';

const TableLine = ({standardName, date, latestGrade}) =>
    <tr>
         <td><a href={'#'+standardName}>{standardName}</a></td>
<<<<<<< HEAD
         <td>{date}</td>
=======
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
         <td>{latestGrade}</td>
    </tr>

const tableMaker = (latestAssessments, student) =>
    latestAssessments.map( assessment => 
        <TableLine key={assessment.standardID}
            standardName={assessment.standardName}
            date={assessment.date} 
            latestGrade={
                returnSimplifiedGrade(student.grades[assessment.assessmentID], assessment.maxGrade )}/>)

//these standards are seperated by subject
export const SubjectSection = ({latestAssessments, subject, student}) => 
    <div className="grade-table-container">
        <h3>{subject}</h3>
        <table className="default-table">
            <tbody>
                {
                    tableMaker(latestAssessments, student)
                }
            </tbody>
        </table>
    </div>
    


const returnSimplifiedGrade = (grade, maxGrade) => {
    if ( maxGrade === '+' ){
        switch( grade ){
            case '+':
                return <p>Applying</p>
            case '~':
                return <p>Building</p>
            case '-':
                return <p>Not Yet</p>
            default:
                return <p>ERROR</p>
        }
    }
    else{
        //we need to convert this
        //80 % + means applying
        // < 25 not yet
        //check to see if it is counting/letterCounting
        var percent;
        if( typeof grade === 'object'){
            //count the keys in the grade 
            if( grade instanceof Array){
                percent = grade.length / maxGrade;
            }
            else{
<<<<<<< HEAD
                console.log('WE are in here pop up')
=======
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
                percent = Object.keys(grade).filter(key => grade[key]).length / maxGrade;
            }
        }
        else{
            percent = grade / maxGrade;
        }

        
        if( percent >= .8){
            return <p>Applying</p>
        }
        else if ( percent >= .25){
            return <p>Building</p>
        }
        else {
            return <p>Not Yet</p>
        }
    }
}

export default SubjectSection;