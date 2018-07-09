import AddGrades from './AddGrades';
import { connect } from 'react-redux';
import { addGradesStudent } from '../../services/actions/students';

const mapStateToProps = ( state, ownProps ) => {
    return {
        students: state.students,
        assessment: state.assessments[ownProps.match.params.uuid]
    }
};

const mapDispatchToProps = {
    addGradesStudent
};


const AddGradesContainer = connect(mapStateToProps, mapDispatchToProps)(AddGrades);

export default AddGradesContainer;