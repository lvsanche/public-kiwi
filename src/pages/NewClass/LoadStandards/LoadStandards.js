import React, { Component } from 'react';
import StandardItem from '../../SharedComponents/listItems/StandardItem';
import { Link, withRouter } from 'react-router-dom';
import * as routes from '../../../constants/routes';

const INITIAL_STATE = {
		fileLoaded: false,
		allStandards: []
}

class LoadStandards extends Component {
	constructor (props) {
		super(props);
		this.state = { ...INITIAL_STATE	 }
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
		this.setState({
				fileLoaded: true,
				allStandards: objList['standards'],
		});

  }

	handleOnConfirm(event){
		const { addTempStandard, updateTempClassStandards, history } = this.props;
		const { allStandards } = this.state;
		event.preventDefault();
		allStandards.forEach( standard => {
			const { standardName, assessmentType, subject, standardDetails } = standard;
			const newStandard = addTempStandard(standardName,
								assessmentType,
								subject,
								standardDetails);
			updateTempClassStandards(newStandard.id);
		});
		this.setState({ ...INITIAL_STATE});
		history.push(routes.ADD_STUDENTS);
	}
	//TODO must send the ids into the class object that is the current one
	render(){
		if(this.state.fileLoaded) {
			return(
				<div className="card table-container">
					<div className="card-title">
						<h2>List of Standards read from file</h2>					
					</div>
					<div className="flex-container-cols container">
						<table className="default-table">
								<thead>
									<tr>
										<th>Standard</th>
										<th>Standard Type</th>
										<th>Subject</th>
									</tr>
								</thead>
							<tbody>
								{
									this.state.allStandards.map( (standard,index) => ( <StandardItem key={index} { ...standard} />))
								}
							</tbody>

						</table>
						<div className="button-container footer">
							<button className="" type="submit" onClick={this.handleOnConfirm}>Confirm</button>
							<button className="btn-like cancel-button"><Link to='/'>Cancel</Link></button>
						</div>
					</div>
				</div>
			)
		}
		else {
			return (
				<div className="card">
					<div className="card-title">
						<h2>Load Standards</h2>
					</div>
					<div className="card-content">
						<input className="fileInput" id="newStandardsFile" onChange={this.handleOnChange} type="file" />
						<div className="button-container footer">
							<label className="btn-like" htmlFor="newStandardsFile">Choose File</label>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default withRouter(LoadStandards);
