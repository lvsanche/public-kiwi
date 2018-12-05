import LoadStandards from './LoadStandards';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { addTempStandard, clearTempAll } from '../../../services/actions/temp';
=======
import { addTempStandard, updateTempClassStandards } from '../../../services/actions/temp';
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';

const mapStateToProps = (state) => {
  return {
    classID: state.temp.newClass.classID
  }
}

const mapDispatchToProps = {
  addTempStandard,
  clearTempAll
}
const authCondition = (authUser) => !!authUser;
const LoadStandardsContainer = compose( withAuthorization(authCondition), connect(mapStateToProps, mapDispatchToProps))(LoadStandards);

export default LoadStandardsContainer;
