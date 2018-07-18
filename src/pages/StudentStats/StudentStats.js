import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PopUpSideBar from './AllGradesPopUp/PopUpContainer';
import './StudentStats.css';
import StatsSection from './StatsSection';

const INITIAL_STATE = {
	'countingAssessment': 'latest',
}

class StudentStats extends Component {
	constructor(props){
		super(props);
		this.state = {...INITIAL_STATE};
	}


	render(){
		const { students, assessments, standards} = this.props;
		const studID = this.props.match.params.uuid;
		const student = students[studID];
		const studentName = student.firstName + ' ' + student.lastName;
		const subjects = ['math', 'languageReading', 'motorSkills', 'socialEmotional'];
		return (
			<div className='container' >
				<h2>{studentName}</h2>
				<div className='statSection'>
					<PopUpSideBar assessments={assessments} student={student}/>
					{
						subjects.map( subject =>
							<StatsSection 
								key={subject+student.id}
								student={student} 
								standards={standards} 
								assessments={assessments}
								subject={subject} />
						)
					}

				</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		students: state.students,
		assessments: state.assessments,
		standards: state.standards
	}
};

const StudentStatsContainer = connect(mapStateToProps)(withRouter(StudentStats));

export default StudentStatsContainer;
