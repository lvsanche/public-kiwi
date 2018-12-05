import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import MaxGrade from './components/MaxGrade';
import CancelButton from '../SharedComponents/NavComponents/CancelButton';
import StandardSelector from './components/StandardSelector';
import DateInput from './components/DateInput';
import ErrorBanner from '../SharedComponents/ErrorBanner';

const INITIAL_STATE = {
  date: '',
  standardID: '',
  gradeType: '',
  maxGrade: '',
  subject: '',
  standardName: '',
  error: null,
};

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

  componentWillUnmount(){
    this.handleCancel();
  }

  handleSubmit(event){
    event.preventDefault();
    const { addTempAssessment, history } = this.props;
    const { date, standardID, maxGrade, standardName } = this.state;
    
    if ( date === '' || standardID === '' || maxGrade === '' ){
      this.setState({error: 'Missing date, standard, or grade'})
    }
    else {
      const newAssessment = addTempAssessment(date.toISOString().split('T')[0], standardID, maxGrade, standardName);
      history.push(routes.ADD_GRADES+'/'+newAssessment.assessmentID);
    }

  }

  handleStandardChange(event){
    const { standards } = this.props;
    const standard = standards[event.target.value];
    
    this.setState( {
      standardID: standard.standardID,
      standardName: standard.standardName,
      subject: standard.subject,
      gradeType: standard.gradeType
    });

    if( standard.gradeType === 'letterCounting' ){
      this.setState({maxGrade: 27});
    }
    else if( standard.gradeType === 'counting'){
      this.setState({maxGrade: 20});
    }
    event.preventDefault();
  }

  handleDateChange(date){
    this.setState({date: date});
  }

  handleMaxGradeChange(value){
    this.setState({maxGrade: value});
  }

  render(){
    const { date,
            standardID,
            gradeType,
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
            gradeType={gradeType}
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
