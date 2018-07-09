import React from 'react';
import LetterCounter from '../../components/LetterCountModal';
import { connect } from 'react-redux';

const LetterBody = ( { studentGrades, students, handleChange } ) =>
  <tbody>
      {
         Object.keys(studentGrades).map( (studentID) =>
          <StudentLetterLine 
            key={studentID} 
            studentID={studentID}
            studentName={students[studentID].firstName + ' ' + students[studentID].lastName}
            handleChange={handleChange}
           /> )
      }
  </tbody>


const StudentLetterLine = ({ studentName, handleChange, studentID }) =>
    <tr>
        <td> {studentName} </td>
        <td> 
          <LetterCounter 
            onModalSubmit={handleChange}
            studentID={studentID}
            studentName={studentName} /> 
        </td>
    </tr>

const mapStateToProps = ( state ) => {
    return {
        students: state.students
    }
};

export default connect(mapStateToProps)(LetterBody)