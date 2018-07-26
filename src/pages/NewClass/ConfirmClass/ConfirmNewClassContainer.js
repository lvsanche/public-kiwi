import ConfirmNewClass from './ConfirmNewClass';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';
import { setTeacherName, setClassID} from '../../../services/actions/session';
import { setUpAssessments } from '../../../services/actions/assessments';
import { clearTempAll } from '../../../services/actions/temp';
import { addExistingStandard} from '../../../services/actions/standards';
import { addNewStudent } from '../../../services/actions/students';

const mapStateToProps = (state) => {
  return {
    authUser: state.session.authUser,
    nClass: state.temp.newClass,
    newStudents: state.temp.newStudents,
    newStandards: state.temp.newStandards,
    teacherName: state.session.teacherName,
  }
}

const mapDispatchToProps = {
  clearTempAll,
  setTeacherName,
  setClassID,
  setUpAssessments,
  addExistingStandard,
  addNewStudent,
}

const authCondition = (authUser) => !!authUser;

const ConfirmNewClassContainer = compose(withAuthorization(authCondition),connect(mapStateToProps, mapDispatchToProps))(ConfirmNewClass);


export default ConfirmNewClassContainer;
