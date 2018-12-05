import AddAssessment from './AddAssessment';
import { connect } from 'react-redux';
import { addTempAssessment } from '../../services/actions/temp';
import { compose } from 'recompose';
import withAuthorization from '../SharedComponents/auth/withAuthorization';

const mapStateToProps = (state) =>{
	return {
		authUser: state.session.authUser,
		standards: state.standards,
		classID: state.session.classID
	}
}

const mapDispatchToProps = {
	addTempAssessment
}

const authCondition = (authUser) => !!authUser;

const AddAssessmentContainer = 
	compose(
		withAuthorization(authCondition),
		connect(mapStateToProps, mapDispatchToProps)) (AddAssessment);

export default AddAssessmentContainer;
