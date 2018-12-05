import AddGrades from './AddGrades';
import { connect } from 'react-redux';
import { addGradesStudent } from '../../services/actions/students';
import { clearTempAll } from '../../services/actions/temp';
import { addExistingAssessment } from '../../services/actions/assessments';

const mapStateToProps = ( state, ownProps ) => {
    return {
<<<<<<< HEAD
        students: sortStudents(state.students),
=======
        students: state.students,
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
        assessment: state.temp.newAssessment,
        standard: state.standards[ state.temp.newAssessment.standardID ],
        classID: state.session.classID
    }
};

const compNames = (studentA, studentB) => {
    var nameA = studentA.lastName+studentA.firstName;
    var nameB = studentB.lastName+studentB.firstName;
    return (nameA > nameB)? 1: (nameA < nameB)? -1 : 0;
}
//Returns array of sorted students by first name first
const sortStudents = (students) => {
    var studentArray = Object.keys(students).map( studID => students[studID]);
    studentArray.sort(compNames);
    var studentsObj = {};
    studentArray.forEach( student => {
        studentsObj[student.studentID] = Object.assign({}, student);
    });
    return studentsObj;
}

const mapDispatchToProps = {
    addGradesStudent,
    clearTempAll,
    addExistingAssessment
};


const AddGradesContainer = connect(mapStateToProps, mapDispatchToProps)(AddGrades);

export default AddGradesContainer;