import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PopUpSideBar from './AllGradesPopUp/PopUpContainer';
import './StudentStats.css';
import StatsSection from './StatsSection';

class StudentStats extends Component {
	componentWillUpdate(){
		window.scrollTo(0,0);
	}
	componentWillMount() {
		window.scrollTo(0,0);
	}
	componentWillUnmount(){
		window.scrollTo(0,0);
	}
	render(){
		const { students, assessments, standards} = this.props;
		const studID = this.props.match.params.uuid;
		const student = students[studID];
		const studentName = student.firstName + ' ' + student.lastName;
		const subjects = ['math', 'languageReading', 'motorSkills', 'socialEmotional'];
		
		return (
			<div className='statPage flex-container-cols'>
				<h2 id="top" className="statsPageHeader">{studentName}</h2>
				<PopUpSideBar assessments={assessments} student={student} standards={standards}/>
				{ 
					subjects.map( subject =>
						<StatsSection 
							key={subject+student.studentID}
							student={student} 
							standards={standards} 
							assessments={assessments}
							subject={subject} />
					)
				}
			</div>
		)
	}
}

				

const mapStateToProps = (state, ownProps) => {
	return {
		students: state.students,
		student: ownProps,
		assessments: state.assessments,
		standards: state.standards
	}
};

const StudentStatsContainer = connect(mapStateToProps)(withRouter(StudentStats));

export default StudentStatsContainer;
