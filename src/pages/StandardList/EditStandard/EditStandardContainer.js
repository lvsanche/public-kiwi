import EditStandard from './EditStandard';
import { connect } from 'react-redux';
import { editStandard } from '../../../services/actions/standards';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';

const mapStateToProps = (state, ownProps) => {
  return {
    standard: state.standards[ownProps.match.params.uuid],
    authUser: state.session.authUser
  }
}

const mapDispatchToProps = {
	editStandard
}

const authCondition = (authUser) => !!authUser;

const EditStandardContainer = compose(withAuthorization(authCondition),connect(mapStateToProps, mapDispatchToProps))(EditStandard);

export default EditStandardContainer;
