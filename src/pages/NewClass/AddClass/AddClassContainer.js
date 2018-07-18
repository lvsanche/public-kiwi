import AddClass from './AddClass';
import {addTempClass, clearTempAll} from '../../../services/actions/tempClass';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';

const mapStateToProps = (state) => {
  return {
    authUser: state.sessionState.authUser,
  }
}

const mapDispatchToProps = {
  addTempClass,
  clearTempAll
}
const authCondition = (authUser) => !!authUser;
const AddClassContainer = compose( withAuthorization(authCondition), connect(mapStateToProps, mapDispatchToProps))(AddClass);

export default AddClassContainer;
