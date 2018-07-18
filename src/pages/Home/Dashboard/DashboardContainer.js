import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';
import { Dashboard } from './Dashboard';

const mapStateToProps = (state) => {
    return {
        authUser: state.sessionState.authUser,
        username: state.sessionState.userName,
        currentClass: state.sessionState.currentClass,
        students: state.students,
        assessments: state.assessments,
        standards: state.standards
    }
}

const authCondition = (authUser) => !!authUser;
const DashboardContainer = compose(withAuthorization(authCondition), connect(mapStateToProps))(Dashboard);

export default DashboardContainer;
