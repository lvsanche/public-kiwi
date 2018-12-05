import React, { Component } from 'react';
import StandardItem from '../../SharedComponents/listItems/StandardItem';
import { withRouter } from 'react-router-dom';
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
		this.handleCancel = this.handleCancel.bind(this);
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
		const { addTempStandard, history, classID } = this.props;
		const { allStandards } = this.state;
		event.preventDefault();
		allStandards.forEach( standard => {
			const { standardName, gradeType, subject, standardDetails } = standard;
			addTempStandard(standardName,
								classID,
								gradeType,
								subject,
								standardDetails);
		});
		this.setState({ ...INITIAL_STATE});
		history.push(routes.ADD_STUDENTS);
	}

	handleCancel() {
		this.setState({...INITIAL_STATE});
		this.props.clearTempAll();
		this.props.history.push(routes.DASHBOARD);
	}
	
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
							<button onClick={this.handleCancel} >Cancel</button>
						</div>
					</div>
				</div>
			)
		}
		else {
			return (
				<div className="card card-30">
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
