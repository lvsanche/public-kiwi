import ConfirmNewClass from './ConfirmNewClass';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';
import { setUser, setCurrentClass} from '../../../services/actions/session';
import { clearTempAll } from '../../../services/actions/tempClass';
import { addStandard} from '../../../services/actions/standards';
import { addStudent } from '../../../services/actions/students';

const mapStateToProps = (state) => {
  return {
    authUser: state.sessionState.authUser,
    nClass: state.tempNewClasses.newClass,
    newStudents: state.tempNewClasses.newStudents,
    newStandards: state.tempNewClasses.newStandards,
    teacherName: state.sessionState.userName,
  }
}

const mapDispatchToProps = {
  clearTempAll,
  setUser,
  setCurrentClass,
  addStandard,
  addStudent,
}

const authCondition = (authUser) => !!authUser;

const ConfirmNewClassContainer = compose(withAuthorization(authCondition),connect(mapStateToProps, mapDispatchToProps))(ConfirmNewClass);


export default ConfirmNewClassContainer;
