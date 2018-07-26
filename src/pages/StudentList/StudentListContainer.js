import React from 'react';
import { connect } from 'react-redux';
import { editStudent } from '../../services/actions/students';
import StudentEditItem from './StudentEditItem';
import { compose } from 'recompose';
import withAuthorization from '../SharedComponents/auth/withAuthorization';

const StudentList = ({students, onStudentClick}) => (
  <div className="table-container card">
    <div className="card-title">
      <h2>Students</h2>
    </div>
    <div className="card-content container">
      <table className="default-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(students).map( key => ( <StudentEditItem key={key} onStudentClick={onStudentClick} {...students[key]} />))
          }
        </tbody>
      </table>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  students: state.students,
  authUser: state.session.authUser
});

const mapDispatchToProps = (dispatch) => ({
  onStudentClick() {dispatch(editStudent)}
})

const authCondition = (authUser) => !!authUser;

const StudentListContainer = compose(withAuthorization(authCondition),connect(mapStateToProps, mapDispatchToProps))(StudentList);

export default StudentListContainer;
