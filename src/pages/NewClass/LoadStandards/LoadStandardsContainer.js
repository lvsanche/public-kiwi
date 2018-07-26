import LoadStandards from './LoadStandards';
import { connect } from 'react-redux';
import { addTempStandard, updateTempClassStandards } from '../../../services/actions/temp';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';

const mapDispatchToProps = {
  addTempStandard,
	updateTempClassStandards
}
const authCondition = (authUser) => !!authUser;
const LoadStandardsContainer = compose( withAuthorization(authCondition), connect(null, mapDispatchToProps))(LoadStandards);

export default LoadStandardsContainer;
