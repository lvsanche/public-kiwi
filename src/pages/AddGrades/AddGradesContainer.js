import AddGrades from './AddGrades';
import { connect } from 'react-redux';
import { addGradesStudent } from '../../services/actions/students';
import { clearTempAll } from '../../services/actions/temp';
import { addExistingAssessment } from '../../services/actions/assessments';

const mapStateToProps = ( state, ownProps ) => {
    return {
        students: state.students,
        assessment: state.temp.newAssessment,
        standard: state.standards[ state.temp.newAssessment.standardID ],
        classID: state.session.classID
    }
};

const mapDispatchToProps = {
    addGradesStudent,
    clearTempAll,
    addExistingAssessment
};


const AddGradesContainer = connect(mapStateToProps, mapDispatchToProps)(AddGrades);

export default AddGradesContainer;