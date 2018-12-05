import AddStudents from './AddStudents';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { addTempStudent, clearTempAll } from '../../../services/actions/temp';
=======
import { addTempStudent, updateTempClassStudents } from '../../../services/actions/temp';
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';

const mapDispatchToProps = {
    addTempStudent,
    clearTempAll
}

const authCondition = (authUser) => !!authUser;

const AddStudentsContainer = compose(withAuthorization(authCondition),connect(null, mapDispatchToProps))(AddStudents);


export default AddStudentsContainer;
