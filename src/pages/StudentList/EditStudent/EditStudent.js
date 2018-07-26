import React, {Component} from 'react';
import EditGradeItem from './EditGradeItem';
import * as routes from '../../../constants/routes';
import { students } from '../../../services/api';
import { createWholeDict } from '../../../services/dataFormatters/miscFormatters';
import SortFilterBar from './SortFilterBar';
import { filterAssessments} from '../../../services/dataFormatters/filterBy';
import { sortAssessments } from '../../../services/dataFormatters/sortBy';
import ErrorBanner from '../../SharedComponents/ErrorBanner';

const INITIAL_STATE = {
	filterMenuDisplay: 'none', 
	sortBy: 'dateAscending',
	filters: {
		subject: 'all',
		gradeType: 'all',
		searchText: '',
	},
	grades: {},
	error: ''
}

class EditStudent extends Component {
	constructor (props) {
		super(props);
		this.state = {
				...INITIAL_STATE
			}
		this.handleFilterBarToggle = this.handleFilterBarToggle.bind(this);
		this.handleGradeChange = this.handleGradeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSortChange = this.handleSortChange.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	componentWillUnmount(){
		window.scrollTo(0,0);
	}

	handleFilterBarToggle() {
		(this.state.filterMenuDisplay === 'none')
		? this.setState({'filterMenuDisplay': 'flex'})
		: this.setState({'filterMenuDisplay': 'none'})	
	}

	handleGradeChange (assessmentID, standardID, value) {
		const { assessments } = this.props;
		const { gradeType } = assessments[standardID][assessmentID];
		const { grades } = this.state;

		var newGrades;

		if ( gradeType === 'counting'){
			var countDict = createWholeDict(value);
			newGrades = Object.assign({}, grades, {
				[assessmentID]: countDict
			});
		}
		else{
			newGrades = Object.assign({}, grades, {
				[assessmentID]: value
			});
		}
		
		this.setState({grades: newGrades});

	}

	handleReset(){
		this.setState({...INITIAL_STATE});
	}

	handleCancel(){
		const { history } = this.props;
		history.push(routes.STUDENTS_LIST);
	}

	handleSubmit(event){
		event.preventDefault();
		const { history, addGradesStudent, student } = this.props;
		const { grades } = this.state;

		Object.keys(grades).forEach( assessmentID => {
			students.postStudentGrade(student.studentID, student.classID, assessmentID,
				grades[assessmentID]).catch(e => console.log(e));

			addGradesStudent(student.studentID, assessmentID, grades[assessmentID]);
		});

		history.push(routes.STUDENT_STATS+'/'+student.studentID);
	}

	handleSortChange(value){
		this.setState({
			sortBy: value
		});
	}

	handleFilterChange(key, value){
		var filters = Object.assign( {} , this.state.filters);
		filters[key] = value;
		this.setState({
			'filters': filters
		});
	}

	componentWillMount() {
		window.scrollTo(0,0);
	}

	componentWillUpdate(){
		window.scrollTo(0,0);
	}

	render(){
		const { assessments, standards, student} = this.props;

		const { sortBy, filters, error } = this.state;
		// var toDisplay = this.tableBodyCreator(filters, assessments, standards, sortBy, student);
		// console.log(student);
		return(
			<div className="card table-container">
				<div className="card-title">
				<h2>{student.firstName} {student.lastName}</h2>
				</div>
				
				<SortFilterBar
					sortBy={sortBy} filters={filters} 
					handleFilterChange={this.handleFilterChange}
					handleSortChange={this.handleSortChange} 
					handleReset={this.handleReset}
					handleFilterBarToggle={this.handleFilterBarToggle}
					display={this.state.filterMenuDisplay}
					/>
				{error && <ErrorBanner error={error}/>}
				<div className="container card-content">
					<table className="default-table grade-input-table">
						<thead>
							<tr>
								<th>Standard Evaluated</th>
								<th>Date of assessment</th>
								<th>Current Grade</th>
							</tr>
						</thead>
						<tbody>
							<TableBody
								filters={filters}
								assessments={assessments}
								standards={standards}
								sortBy={sortBy}
								student={student}
								handleGradeChange={this.handleGradeChange}
							/>

						</tbody>
					</table>
				</div>
				<div className="button-container">
					<button onClick={this.handleSubmit}>Save Grades</button>
					<button onClick={this.handleCancel}>Cancel</button>
				</div>
				
			</div>
		)
	}
}


const TableBody = ({filters, assessments, standards, sortBy, student, handleGradeChange}) => {
	var toDisplay = 
		<tr>
			<td></td><td></td><td></td>
		</tr>
		
	
	const filteredArray = filterAssessments(filters, assessments, standards);
	// console.log(filteredArray);
	if( filteredArray.length > 0 ){
		toDisplay = sortAssessments(sortBy, filteredArray)
		.map( 
			assessment => ( 
				<EditGradeItem 
					key={assessment.assessmentID+student.studentID} 
					grade={student.grades[assessment.assessmentID]} 
					onChange={handleGradeChange} 
					assessment={assessment}
					standard={standards[assessment.standardID]} 
					/>)
		);
	}

	return toDisplay;
};


export default EditStudent;
