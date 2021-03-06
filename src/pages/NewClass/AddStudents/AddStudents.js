import React, {Component} from 'react';
import * as routes from '../../../constants/routes';
import withRouter from 'react-router-dom/withRouter';
import ErrorBanner from '../../SharedComponents/ErrorBanner';
import GenericTextInput from '../../SharedComponents/input/GenericTextInput';
import "./AddStudent.css";
const INITIAL_STATE = {
    students: [{
        firstName: '',
        lastName: ''
    }],
    error: ''
}

class AddStudents extends Component{
    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAnotherStudent = this.handleAnotherStudent.bind(this);
        this.handleRemovingStudent = this.handleRemovingStudent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleSubmit(){
		const { students } = this.state;
		const { addTempStudent, history } = this.props;
        var isValid = true;
		students.forEach( student => {
            const {firstName, lastName} = student;
            if( firstName === '' || lastName === ''){
                //must set up a warning text
                isValid=false;
                this.setState({
                    error: 'One of the fields is empty, please fill it in'
                })
            }
        });
        
        if(isValid){
            students.forEach( student => {
                const { firstName, lastName } = student;
                addTempStudent(firstName, lastName);
            })
            this.setState({...INITIAL_STATE})
            history.push(routes.CONFIRM_NEW_CLASS);
        }
		
    }

    handleCancel(){
        const { history } = this.props;
        this.setState({...INITIAL_STATE});
        this.props.clearTempAll();
        history.push(routes.DASHBOARD);
    }

    handleTextChange(index, key, value){
        //must distinguish the student being changed
        var newStudent = Object.assign( {}, this.state.students[index]);
        newStudent[key] = value;
        var newStudents = this.state.students.slice();
        newStudents[index] = newStudent;
        this.setState({
            students: newStudents
        });
    }

    handleAnotherStudent(){
        var newStudentArray = this.state.students.slice();
        newStudentArray.push({
            firstName: '',
            lastName: ''
        });
        this.setState({
            students: newStudentArray
        });
    }

    handleRemovingStudent( index ) {
        var newStudentArray = this.state.students.slice();
        newStudentArray.splice(index, 1);
        this.setState({ 
            students: newStudentArray
        });
    }

    render(){
        const { students, error } = this.state;

        return (
            <div className="card flex-container-cols">
                <div className="card-title">
                    <h2>Enter Students</h2>
                </div>
                {error && <ErrorBanner error={error} />}
                <table className="default-table">
                    <tbody>
                    {
                        students.map( (student,index) => 
                            <NewStudentLine 
                                key={index}
                                index={index}
                                onChange={this.handleTextChange}
                                onRemoval={this.handleRemovingStudent} 
                                {...students[index]} />
                        )
                    }
                    </tbody>
                </table>
                <AddAnotherStudent handleAnotherStudent={this.handleAnotherStudent}/>
                <div className="button-container">
                    <SubmitButton handleSubmit={this.handleSubmit}/>
                    <CancelButton handleCancel={this.handleCancel}/>
                </div>
            </div>  
        )
    }
}

const CancelButton = ({handleCancel}) =>
    <button onClick={handleCancel}>Cancel</button>

const SubmitButton = ( { handleSubmit } ) =>
    <button onClick={handleSubmit}> Submit</button>

const AddAnotherStudent = ( { handleAnotherStudent} ) =>
    <button onClick={handleAnotherStudent}>+</button>

const handleStudentTextChange = (handleChange, index, key) => 
    (value) => handleChange(index, key, value)

const NewStudentLine = ( {onChange, onRemoval, index, firstName, lastName} ) => 
        <tr className="studentRow">
            <td>
                <label>{index+1 + '.'}</label>
                <GenericTextInput 
                    value={firstName}
                    handleChange={handleStudentTextChange(onChange, index, 'firstName')}
                    labelText={'First Name'}
                />
            </td> 
            <td className="removeBtnContainer">
                <GenericTextInput 
                    value={lastName}
                    handleChange={handleStudentTextChange(onChange, index, 'lastName')}
                    labelText={'Last Name'}
                /> 
                <button type="button" onClick={() => onRemoval(index)}><i className="fas fa-times-circle"></i></button>
            </td>
        </tr>

export default withRouter(AddStudents);
