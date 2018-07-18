import React from 'react';

const TableLine = ({standardName, latestGrade}) =>
    <tr>
        <td><a href={'#'+standardName}>{standardName}</a></td><td>{latestGrade}</td>
    </tr>

const tableMaker = (latestAssessments, student) =>
    latestAssessments.map( assessment => 
        <TableLine key={assessment.standardID}
            standardName={assessment.standardName} 
            latestGrade={
                returnSimplifiedGrade(student.grades[assessment.id], assessment.maxGrade, assessment.gradingType )}/>)

//these standards are seperated by subject
export const SubjectSection = ({latestAssessments, student}) => 
    <table>
        <thead>
            <tr>
                <th>{latestAssessments[0].subject}</th>
            </tr>
            <tr>

            </tr>
        </thead>
        <tbody>
            {
                tableMaker(latestAssessments, student)
            }
        </tbody>
    </table>


const returnSimplifiedGrade = (grade, maxGrade, gradingType) => {
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
        if(gradingType.includes('ounting')){
            //count the keys in the grade 
            percent = Object.keys(grade).length / maxGrade;
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