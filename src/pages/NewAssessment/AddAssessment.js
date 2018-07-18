import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { assessments, classes } from '../../services/api';
import * as routes from '../../constants/routes';
import MaxGrade from './components/MaxGrade';
import CancelButton from '../SharedComponents/NavComponents/CancelButton';
import StandardSelector from './components/StandardSelector';
import DateInput from './components/DateInput';
import ErrorBanner from '../SharedComponents/ErrorBanner';

const INITIAL_STATE = {
  date: '',
  standardID: '',
  gradingType: '',
  maxGrade: '',
  subject: '',
  standardName: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class AddAssessment extends Component {
  constructor (props) {
    super(props);
    this.state = { ...INITIAL_STATE }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStandardChange = this.handleStandardChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleMaxGradeChange = this.handleMaxGradeChange.bind(this);
  }

  handleCancel(){
    this.setState({...INITIAL_STATE});
  }

  handleSubmit(event){
    event.preventDefault();
    const { addAssessment, classID, history } = this.props;
    const { date, standardID, gradingType, maxGrade, standardName, subject } = this.state;

    if ( date === '' || standardID === '' ){
      this.setState({error: 'Missing date or Standard'})
    }
    else {
      const newAssessment = addAssessment(date, standardID, gradingType, maxGrade, standardName, subject);
    
      assessments.doCreateAssessment(date, newAssessment.id, gradingType, maxGrade, standardID, standardName, subject)
      .catch( error => console.log(error) );
      
      classes.doAppendAssessment(classID, newAssessment.id)
      .catch( error => console.log(error) );
      
      history.push(routes.ADD_GRADES+'/'+newAssessment.id);
    }

  }

  handleStandardChange(event){
    const { standards } = this.props;
    const standard = standards[event.target.value];
    this.setState( {
      standardID: event.target.value,
      standardName: standard.standardName,
      subject: standard.subject,
      gradingType: standard.assessmentType
    })

    if( standard.assessmentType === 'letterCounting' ){
      this.setState(byPropKey('maxGrade', 27));
    }
    else if( standard.assessmentType === 'counting'){
      this.setState(byPropKey('maxGrade', 20));
    }
    event.preventDefault();
  }

  handleDateChange(value){
    this.setState(byPropKey('date', value));
  }

  handleMaxGradeChange(value){
    this.setState(byPropKey('maxGrade', value));
  }

  render(){
    const { date,
            standardID,
            gradingType,
            error
          } = this.state;

    const {standards} = this.props;

    return (
      <div className="form-container card">
        <header className="card-title">
          <h2>Add an Assessment</h2>
        </header>
        {error && <ErrorBanner error={error}/>}
        <form className="container" onSubmit={ this.handleSubmit }>
          <DateInput
            handleChange={this.handleDateChange}
            value={date}
            labelText={'Date of Assessment'}
            />
          <StandardSelector 
            handleChange={this.handleStandardChange}
            value={standardID}
            standards={standards}
            />
          <MaxGrade
            gradingType={gradingType}
            handleMaxGrade={this.handleMaxGradeChange}
            />
          <div className="button-container">
            <button type="submit">Add Assessment</button>
            <CancelButton handleCancel={this.handleCancel} />
          </div>
          
        </form>
      </div>
    )
  }
}

export default withRouter(AddAssessment);
