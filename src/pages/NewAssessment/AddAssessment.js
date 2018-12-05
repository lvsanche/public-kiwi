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
    
<<<<<<< HEAD
    if ( date === '' || standardID === '' || maxGrade === '' ){
      this.setState({error: 'Missing date, standard, or grade'})
=======
    if ( date === '' || standardID === '' ){
      this.setState({error: 'Missing date or Standard'})
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
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
<<<<<<< HEAD
    });

    if( standard.gradeType === 'letterCounting' ){
      this.setState({maxGrade: 27});
    }
    else if( standard.gradeType === 'counting'){
      this.setState({maxGrade: 20});
=======
    })

    if( standard.gradeType === 'letterCounting' ){
      this.setState(byPropKey('maxGrade', 27));
    }
    else if( standard.gradeType === 'counting'){
      this.setState(byPropKey('maxGrade', 20));
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
    }
    event.preventDefault();
  }

  handleDateChange(date){
<<<<<<< HEAD
    this.setState({date: date});
=======
    this.setState(byPropKey('date', date));
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
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
