import AddAssessment from './AddAssessment';
import { connect } from 'react-redux';
import { addAssessment } from '../../services/actions/assessments';
import { compose } from 'recompose';
import withAuthorization from '../SharedComponents/auth/withAuthorization';

const mapStateToProps = (state) =>{
	return {
		authUser: state.sessionState.authUser,
		standards: state.standards,
		classID: state.sessionState.currentClass
	}
}

const mapDispatchToProps = {
	addAssessment
}

const authCondition = (authUser) => !!authUser;

const AddAssessmentContainer = 
	compose(
		withAuthorization(authCondition),
		connect(mapStateToProps, mapDispatchToProps)) (AddAssessment);

export default AddAssessmentContainer;
