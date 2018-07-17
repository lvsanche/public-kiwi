import React, {Component} from 'react';
import EditGradeItem from './EditGradeItem';
import * as routes from '../../../constants/routes';
import { students } from '../../../services/api';
import { createWholeDict } from '../../../services/dataFormatters/miscFormatters';
import SortFilterBar from './SortFilterBar';
import { filterAssessments} from '../../../services/dataFormatters/filterBy';
import { sortAssessments } from '../../../services/dataFormatters/sortBy';

const INITIAL_STATE = {
	filterMenuDisplay: 'none', 
	sortBy: 'dateAscending',
	filters: {
		subject: 'all',
		gradingType: 'all',
		searchText: '',
	},
	grades: {}
}

class EditStudent extends Component {
	constructor (props) {
		super(props);
		this.state = {
				...INITIAL_STATE,
				student: props.students[props.match.params.uuid],
			}
		this.handleFilterBarToggle = this.handleFilterBarToggle.bind(this);
		this.handleGradeChange = this.handleGradeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSortChange = this.handleSortChange.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleFilterBarToggle() {
		(this.state.filterMenuDisplay === 'none')
		? this.setState({'filterMenuDisplay': 'block'})
		: this.setState({'filterMenuDisplay': 'none'})	
	}
	handleGradeChange (id, value) {
		const { assessments } = this.props;
		const { gradingType } = assessments[id];
		const { grades } = this.state;
		var newGrades;
		if ( gradingType === 'counting'){
			var countDict = createWholeDict(value);
			newGrades = Object.assign({},grades, {
				[id]: countDict
			});
		}
		else{
			newGrades = Object.assign({}, grades, {
				[id]: value
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
		const { history, addGradesStudent } = this.props;
		const { student, grades } = this.state;

		const newStudentGrades = Object.assign({}, student.grades, grades); 
		Object.keys(grades).forEach( assessmentID => {
			addGradesStudent(student.id,assessmentID, grades[assessmentID])
		});
		students.doSetAllStudentGrades(student.id, newStudentGrades).catch(e=>console.log(e));
		history.push(routes.STUDENTS_LIST);
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

	tableBodyCreator = (filters, assessments, sortBy, student) => {
		var toDisplay = 
			<tr>
				<td><p className='errorText'>No matching results found</p></td><td></td><td></td>
			</tr>
	
		if(Object.keys(assessments).length > 0){
			const filteredArray = filterAssessments(filters, assessments);
			if( filteredArray.length > 0 ){
				toDisplay = sortAssessments(sortBy, filteredArray)
				.map( 
					assessment => ( 
						<EditGradeItem 
							key={assessment.id} 
							grade={student.grades[assessment.id]} 
							onChange={this.handleGradeChange} 
							assessment={assessment} 
							/>)
				);
			}
			
		}
		return toDisplay;
	};

	render(){
		const { assessments } = this.props;
		const { student, sortBy, filters } = this.state;

		var toDisplay = this.tableBodyCreator(filters, assessments, sortBy, student);
		
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
				<table className="default-table">
					<thead>
						<tr>
							<th>Standard Evaluated</th>
							<th>Date of assessment</th>
							<th>Current Grade</th>
						</tr>
					</thead>
					<tbody>
						{	
							toDisplay
						}
					</tbody>

				</table>
			
			<div className="button-container">
				<button onClick={this.handleSubmit}>Save Grades</button>
				<button onClick={this.handleCancel}>Cancel</button>
			</div>
				
			</div>
		)
	}
}





export default EditStudent;
