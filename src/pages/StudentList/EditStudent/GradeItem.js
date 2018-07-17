import React, { Component } from 'react';

class GradeItem extends Component{

	constructor(props){
		super(props);
		this.state = {
			grade: props.value,
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleLettersSubmit = this.handleLettersSubmit.bind(this);
	}

	handleChange(event){
		event.preventDefault();
		this.setState ( {grade: event.target.value });
		this.props.onChange(event.target.id, event.target.value);
	}

	handleLettersSubmit(event, grades){
		this.setState( {grade: grades});
		this.props.onChange(event.target.id, grades);

	}

	render(){
		if(this.props.gradingType === 'criteria'){
	    	return(
				<tr>
			      	<td>{this.props.standardName}</td>
				  	<td>{this.props.date}</td>
					<td>{JSON.stringify(this.props.value)}</td>
			  	</tr>
	    	)
	    }
	    else{
	    	return(
				<tr>
			      	<td>{this.props.standardName} + Not categoru</td>
				  	<td>{this.props.date}</td>
					<td>{JSON.stringify(this.props.value)}</td>
			  	</tr>
	    	)
    	}
	}
}


export default GradeItem;
