import EditStudent from './EditStudent';
import { connect } from 'react-redux';
import { addGradesStudent } from '../../../services/actions/students';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    assessments: state.assessments,
    authUser: state.sessionState.authUser,
    standards: state.standards
  }
}

const mapDispatchToProps = {
  addGradesStudent
}

const authCondition = (authUser) => !!authUser;


const EditStudentContainer = compose( withAuthorization(authCondition),connect(mapStateToProps, mapDispatchToProps))(withRouter(EditStudent));

export default EditStudentContainer;
