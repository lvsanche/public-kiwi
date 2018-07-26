import React, {Component} from 'react';
import LetterCounter from '../../SharedComponents/modals/LettersModalContainer';
import { CriteriaNumberInput, CriteriaCategoryInput } from '../../SharedComponents/input/GradeInput';

class EditGradeItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      'grade': props.grade
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }

  handleChange( event ){
    this.setState({'grade': event.target.value});
    const { onChange, assessment } =this.props;
    onChange(assessment.assessmentID, assessment.standardID, event.target.value);
  }

  handleModalSubmit( value ){
    this.setState({'grade': {...value}});
    const { onChange, assessment } = this.props;
    onChange(assessment.assessmentID, assessment.standardID, value);
  }

  render() {
    const { grade } = this.state;
    
    const { assessment, standard } = this.props;
    const { date, maxGrade, standardName} = assessment;
    const { gradeType } = standard;

    if ( gradeType === 'criteria'){
      if( maxGrade === '+'){
        return (
          RowBuilder(standardName, date,
            <CriteriaCategoryInput
              value={grade}
              radioName={assessment.assessmentID}
              onChange={this.handleChange} /> 
          )
        )
      }
      else {
        return (
          RowBuilder( standardName, date,
            <CriteriaNumberInput
              value={grade}
              maxGrade={maxGrade}
              onChange={this.handleChange} />
          )
        )
      }  
      
    }
    else if ( gradeType === 'counting' ){
      return (
        <tr>
          <td>{standardName}</td>
          <td>{date}</td>
          <td> <input type="text" value={grade} onChange={this.handleChange} /> </td>
        </tr>
      )
    }
    else if ( gradeType === 'letterCounting' ){
      return (
        <tr>
          <td>{standardName}</td>
          <td>{date}</td>
          <td> <LetterCounter 
                onModalSubmit={this.handleModalSubmit}
                studentID={assessment.assessmentID}
                grades={grade}
                studentName={standardName +' '+date} /> </td>
        </tr>
      )
    }
  }
}

const RowBuilder = ( standardName, date, inputField) =>
  <tr>
    <td>{standardName}</td>
    <td>{date}</td>
    <td>{inputField}</td>
  </tr>

export default EditGradeItem;
