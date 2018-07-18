import AddStudents from './AddStudents';
import { connect } from 'react-redux';
import { addTempStudent, updateTempClassStudents } from '../../../services/actions/tempClass';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';

const mapDispatchToProps = {
    addTempStudent,
    updateTempClassStudents
}

const authCondition = (authUser) => !!authUser;

const AddStudentsContainer = compose(withAuthorization(authCondition),connect(null, mapDispatchToProps))(AddStudents);


export default AddStudentsContainer;
