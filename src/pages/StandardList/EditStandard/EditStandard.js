import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class EditStandard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      standardName: props.assignment.standardName,
      gradeType: props.assignment.gradeType,
      subject: props.assignment.subject,
      standardDetails: props.assignment.standardDetails,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let target = event.target;

    switch(target.name){
      case "standardName":
        this.setState({standardName: target.value});
        break;
      case "gradeType":
        this.setState({gradeType: target.value});
        break;
      case "subject":
        this.setState({subject: target.value});
        break;
      case "standardDetails":
        this.setState({standardDetails: target.value});
        break;
      default:
        console.log("NOT GOOD");
    }
  }

  handleSubmit(event){
    event.preventDefault();
    // (id, name, scoreType, maxGrade, subject, description)
    this.props.editStandard(this.props.standard.standardID,
      this.state.standardName,
      this.state.gradeType,
      this.state.subject,
      this.state.standardDetails);

  }


  render (){
    return (
      <div>
        <h2>Edit Standard</h2>
        <form
          onSubmit={ this.handleSubmit } >

          <label>
            Name of Standard
            <input className="w3-input w3-border" value={this.state.standardName} name="standardName" onChange={this.handleChange} type="text" size="40" />

          </label>

          <br />
          <label>
            Standard Type
            <select name="gradeType" value={this.state.gradeType} onChange={this.handleChange}>
              <option value="criteria">Criteria</option>
              <option value="letterCount"> Counting Letters </option>
            </select>
          </label>
          <br />

          <label>
            Subject:
            <select name="subject" value={this.state.subject}onChange={this.handleChange}>
              <option value="math"> MATH READINESS </option>
              <option value="socialEmotional"> SOCIAL-EMOTIONAL DEVELOPMENT </option>
              <option value="motorSkills"> FINE MOTOR SKILLS </option>
              <option value="languageReading"> LANGUAGE ARTS/READING READINESS </option>
            </select>
          </label>

          <br />
          <label>
            Details:
            <br />
            <textarea className="w3-input w3-border" value={this.state.standardDetails} name="standardDetails" onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit">Save Standard</button>
          <button><Link to='/' style={{textDecoration: 'none'}}>Cancel</Link></button>
        </form>
      </div>
    );
  };
}


export default EditStandard;
