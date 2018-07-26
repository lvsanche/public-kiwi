import React from 'react';
import EditStudent from './EditStudent';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addGradesStudent } from '../../../services/actions/students';

class Experiment extends React.Component {
	render(){
        const {student, students, assessments, standards } = this.props;
        return <EditStudent 
            students={students}
            assessments={assessments}
            standards={standards}
            student={student}
        />
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        students: state.students,
        student: state.students[ownProps.match.params.uuid],
        assessments: state.assessments,
        standards: state.standards
    }
  }
  const mapDispatchToProps = {
    addGradesStudent
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Experiment));