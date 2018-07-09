import React from 'react';
import { CriteriaCategoryInput, CriteriaNumberInput } from '../../components/GradeInput';
import { connect } from 'react-redux';

const CriteriaBody = ( { studentGrades, handleChange, students, assessment } ) =>
  <tbody>
      {
         ( assessment.maxGrade === '+') ? 
            Object.keys(studentGrades).map( studentID =>
                <StudentCriteriaLineCat 
                    key={studentID}
                    studentName={students[studentID].firstName + ' ' +students[studentID].lastName}
                    maxGrade={assessment.maxGrade}
                    onChange={ event => handleChange(event.target.value, studentID)}
                    value={studentGrades[studentID] }
                /> )
        : Object.keys(studentGrades).map( studentID =>
            <StudentCriteriaLineText 
                key={studentID}
                studentName={this.props.students[studentID].firstName + ' ' +this.props.students[studentID].lastName}
                maxGrade={assessment.maxGrade}
                onChange={ event => handleChange(event.target.value, studentID)}
                value={studentGrades[studentID]}
                />)
      }
  </tbody>

const StudentCriteriaLineCat = ({onChange, value, studentName }) => 
    <tr>
        <td> {studentName} </td>
        <td>
            <CriteriaCategoryInput value={value} onChange={onChange} radioName={studentName} />
        </td>
    </tr>

const StudentCriteriaLineText = ({ studentName, onChange, maxGrade, value}) =>
    <tr>
        <td> {studentName} </td>
        <td> <CriteriaNumberInput value={value} onChange={onChange} maxGrade={maxGrade} /> </td>
    </tr>


const mapStateToProps = ( state ) => {
    return {
        students: state.students
    }
};

export default connect(mapStateToProps)(CriteriaBody);