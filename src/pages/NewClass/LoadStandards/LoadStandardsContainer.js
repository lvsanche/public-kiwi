import LoadStandards from './LoadStandards';
import { connect } from 'react-redux';
import { addTempStandard, clearTempAll } from '../../../services/actions/temp';
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
