import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import * as routes from '../../../constants/routes';
import GenericTextInput from '../../SharedComponents/input/GenericTextInput';
import ErrorBanner from '../../SharedComponents/ErrorBanner';

const INITIAL_STATE = {
    grade: '',
    year: '',
    school: '',
    error: ''
};

class AddClass extends Component {
    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }


    handleChange( key, value){
        this.setState({[key]: value});
    }

    handleSchoolChange(value){
        this.setState({'school': value})
    }
    
    handleCancel(){
        const { clearTempAll, history } = this.props;
        this.setState({ ...INITIAL_STATE });
        clearTempAll();
        history.push(routes.DASHBOARD);
    }

    handleSubmit(event){
        const { grade, year, school} = this.state;
        const { addTempClass, history, authUser } = this.props;
        
        var errors = handleError(this.state);
        event.preventDefault();

        if( errors ){
            this.setState({'error': errors});
        }
        else{
            addTempClass(year, grade, school, authUser.uid);
            this.setState({ ...INITIAL_STATE });
            history.push(routes.LOAD_STANDARDS);
        }
       
    }

    render () {
        const { year, grade, school, error } = this.state;
        return(
            <div className="form-container card">
                <div className="card-title">
                    <h2> Add Class </h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    {error && <ErrorBanner error={error}/>}
                    <GenericTextInput
                        handleChange={this.handleSchoolChange}
                        labelText={"School Name"}
                        value={school}
                    />
                    <YearSelector 
                        handleChange={this.handleChange}
                        value={year}    
                    />
                    <GradeSelector
                        handleChange={this.handleChange}
                        value={grade}
                    />
                    <div className="button-container flex-container">
                        <button type="submit">Add</button>
                        <button onClick={this.handleCancel} >Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}


const YearSelector = ({handleChange, value}) =>
    <div className="selectorInput">
        <label>Year Thought</label>
        <select
            value={value}
            onChange={ event => handleChange('year', event.target.value)}
        >
            <option value=''> </option>
            <option value='2017-2018'> 2017 - 2018 </option>
            <option value='2018-2019'> 2018 - 2019 </option>
        </select>
    </div>

const GradeSelector = ({handleChange, value}) => 
    <div className="selectorInput">
        <label>Grade Thought</label>
        <select
            value={value}
            onChange={ event => handleChange('grade',event.target.value)}
        >
            <option value=''> </option>
            <option value='pre'> Preschool </option>
            <option value='transk'> Transitional Kindergarten </option>
            <option value='kinder'> Kindergarten </option>
            <option value='1st'> First Grade </option>
        </select>
    </div>

const handleError = ({grade, year, school}) => {
    var errors = [];
    if ( grade === ''){
        errors.push('Grades field is empty')
    }

    if ( year === ''){
        errors.push('Year field is empty')
    }
    if ( school === ''){
        errors.push('School field is empty')
    }

    if( errors.length > 0){
        return errors
    }
    else{
        return false;
    }
}

export default withRouter(AddClass);
