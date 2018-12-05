import React, { Component } from 'react';
import StudentItem from '../../SharedComponents/listItems/StudentItem';
import { Link, withRouter } from 'react-router-dom';
import * as routes from '../../../constants/routes';

const INITIAL_STATE = {
	fileLoaded: false,
	students: []
};

class LoadStudents extends Component {
	constructor (props) {
		super(props);
		this.state = { ...INITIAL_STATE		};
		this.handleOnChange = this.handleOnChange.bind(this);
		this.onReaderLoad = this.onReaderLoad.bind(this);
		this.handleOnConfirm = this.handleOnConfirm.bind(this);
	}

	handleOnChange(event){
		var reader = new FileReader();
    reader.onload = this.onReaderLoad;
    reader.readAsText(event.target.files[0]);
	}

	onReaderLoad(event){
    var objList = JSON.parse(event.target.result);
		this.setState({students: objList['students'],
			fileLoaded: true
		});

  	}

	handleOnConfirm(event){
		const { students } = this.state;
		const { addTempStudent, history } = this.props;

		students.forEach( student => {
			const {fname, lname} = student;
			addTempStudent(fname, lname);
		});

		this.setState({...INITIAL_STATE})
		history.push(routes.CONFIRM_NEW_CLASS);
	}

	render(){
		if(this.state.fileLoaded) {
			return(
				<div>
					<table>
			      <thead>
			        <tr>
			          <th>First Name</th>
			          <th>Last Name</th>
			        </tr>
			      </thead>
			      <tbody>
			        {
			          this.state.students.map( (student,index) => ( <StudentItem key={index} {...student} />))
			        }
			      </tbody>

			    </table>
					<br />
					<button type="submit" onClick={this.handleOnConfirm}>Confirm Students</button>
					<button><Link to={routes.DASHBOARD} style={{textDecoration: 'none'}}>Cancel</Link></button>
				</div>
			)
		}
		else {
			return (
				<div>
					<h4> Select the file with students </h4>
					<input id="newStudentFile" onChange={this.handleOnChange} type="file" />
				</div>
			)
		}
	}
}

export default withRouter(LoadStudents);
