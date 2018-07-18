import React from 'react';
import { connect } from 'react-redux';

const CountBody = ( { studentGrades, students, handleChange } ) =>
  <tbody>
      {
         Object.keys(studentGrades).map( (studentID) =>
         <StudentCountLine 
            key={studentID}
            studentName={students[studentID].firstName + ' ' +students[studentID].lastName}
            onChange={ event => handleChange(event.target.value, studentID)}
           /> )
      }
  </tbody>

const StudentCountLine = ({ studentName, onChange }) =>
    <tr>
        <td> {studentName} </td>
        <td> <input type="text" placeholder='1-3,5,7,9,10-15... for example'
            size='35' onChange={onChange}/> </td>
    </tr>

const mapStateToProps = ( state ) => {
    return {
        students: state.students
    }
};
export default connect(mapStateToProps)(CountBody);