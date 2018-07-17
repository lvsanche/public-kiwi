import React, {Component} from 'react';
import LetterCounter from '../../SharedComponents/modals/LettersModalContainer';
import { CriteriaNumberInput, CriteriaCategoryInput } from '../../SharedComponents/input/GradeInput';

class EditGradeItem extends Component {
  constructor(props){
    super(props);

    var newGrades;
    const { assessment } = props;
    const { gradingType } = assessment;
    if ( gradingType === 'criteria') {
      newGrades = props.grade;
    }
    else if( gradingType === 'counting'){
      var stringSoFar = "";
      Object.keys(props.grade).forEach( k => {
        if ( props.grade[k]){
          stringSoFar= stringSoFar+k+","
        }
      })
      newGrades = stringSoFar.slice(0,-1);

    }
    else{
      newGrades = props.grade;
    }

    this.state = {
      'grade': newGrades
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }

  handleChange( event ){
    this.setState({'grade': event.target.value});
    const { onChange, assessment } =this.props;
    onChange(assessment.id, event.target.value);
  }

  handleModalSubmit( value ){
    this.setState({'grade': {...value}});
    const { onChange, assessment } = this.props;
    onChange(assessment.id, value);
  }

  render() {
    const { grade } = this.state;
    
    const { assessment } = this.props;
    const { gradingType, date, maxGrade, standardName} = assessment;
    if ( gradingType === 'criteria'){
      if( maxGrade === '+'){
        return (
          RowBuilder(standardName, date,
            <CriteriaCategoryInput
              value={grade}
              radioName={assessment.id}
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
    else if ( gradingType === 'counting'){
      return (
        <tr>
          <td>{standardName}</td>
          <td>{date}</td>
          <td> <input type="text" value={grade} onChange={this.handleChange} /> </td>
        </tr>
      )
    }
    else if ( gradingType === 'letterCounting'){
      return (
        <tr>
          <td>{standardName}</td>
          <td>{date}</td>
          <td> <LetterCounter 
                onModalSubmit={this.handleModalSubmit}
                studentID={assessment.id}
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
