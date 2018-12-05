import EditStudent from './EditStudent';
import { connect } from 'react-redux';
import { addGradesStudent } from '../../../services/actions/students';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    student: state.students[ownProps.match.params.uuid],
    assessments: state.assessments,
    authUser: state.session.authUser,
    standards: state.standards
  }
}

const mapDispatchToProps = {
  addGradesStudent
}

const authCondition = (authUser) => !!authUser;

<<<<<<< HEAD
=======

>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
const EditStudentContainer = withAuthorization(authCondition)(withRouter(connect(mapStateToProps, mapDispatchToProps)(EditStudent)));

export default EditStudentContainer;
