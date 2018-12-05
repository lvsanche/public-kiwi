import AddStudents from './AddStudents';
import { connect } from 'react-redux';
import { addTempStudent, clearTempAll } from '../../../services/actions/temp';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';

const mapDispatchToProps = {
    addTempStudent,
    clearTempAll
}

const authCondition = (authUser) => !!authUser;

const AddStudentsContainer = compose(withAuthorization(authCondition),connect(null, mapDispatchToProps))(AddStudents);


export default AddStudentsContainer;
