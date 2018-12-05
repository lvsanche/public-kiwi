import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../../SharedComponents/auth/withAuthorization';
import { Dashboard } from './Dashboard';

const mapStateToProps = (state) => {
    return {
        authUser: state.session.authUser,
        teacherName: state.session.teacherName,
        classID: state.session.classID,
        students: state.students,
        assessments: state.assessments,
        standards: state.standards
    }
}

const authCondition = (authUser) => !!authUser;
const DashboardContainer = compose(withAuthorization(authCondition), connect(mapStateToProps))(Dashboard);

export default DashboardContainer;
