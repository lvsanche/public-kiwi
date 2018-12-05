import React from 'react';
import { CriteriaCategoryInput, CriteriaNumberInput } from '../../SharedComponents/input/GradeInput';
import { connect } from 'react-redux';

const CriteriaBody = ( { studentGrades, handleChange, students, assessment } ) =>
  <tbody>
      {
         ( assessment.maxGrade === '+') ? 
            Object.keys(studentGrades).map( studentID =>
                <StudentCriteriaLineCat 
                    key={studentID}
                    studentName={students[studentID].firstName + ' ' +students[studentID].lastName}
                    onChange={ event => handleChange(event.target.value, studentID)}
                    value={studentGrades[studentID]}
                    />)
        :   Object.keys(studentGrades).map( studentID =>
                <StudentCriteriaLineText 
                    key={studentID}
                    studentName={students[studentID].firstName + ' ' +students[studentID].lastName}
                    onChange={ event => handleChange(event.target.value, studentID)}
                    value={studentGrades[studentID]}
                    maxGrade={assessment.maxGrade}
                    />)
      }
  </tbody>

const StudentCriteriaLineCat = ({studentName, onChange, value }) => 
    <tr className="categoryTable">
        <td className="categoryStudentName"> {studentName} </td>
        <td>
            <CriteriaCategoryInput value={value} onChange={onChange} buttonName={studentName} />
        </td>
    </tr>

const StudentCriteriaLineText = ({ studentName, onChange, value, maxGrade }) =>
    <tr>
        <td> {studentName} </td>
        <td>
            <CriteriaNumberInput value={value} onChange={onChange} maxGrade={maxGrade} />
        </td>
    </tr>


const mapStateToProps = ( state ) => {
    return {
        students: state.students
    }
};

export default connect(mapStateToProps)(CriteriaBody);