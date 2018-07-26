import LoadStudents from './LoadStudents';
import { connect } from 'react-redux';
import { addTempStudent, updateTempClassStudents } from '../../../services/actions/temp';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';

const mapDispatchToProps = {
  addTempStudent,
	updateTempClassStudents
}

const authCondition = (authUser) => !!authUser;

const LoadStudentsContainer = compose(withAuthorization(authCondition),connect(null, mapDispatchToProps))(LoadStudents);


export default LoadStudentsContainer;
