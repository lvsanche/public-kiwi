import React, {Component} from 'react';

class MaxGrade extends Component {
    constructor(props){
        super(props);
        this.state = {
            'criteriaNum': true,
            'maxGrade': '',
        };
        this.handleCheckMark = this.handleCheckMark.bind(this);
        this.handleGradeChange = this.handleGradeChange.bind(this);
    }

    handleCheckMark(){
        this.setState({'criteriaNum':!this.state.criteriaNum})
        this.props.handleMaxGrade('+'); //two is the max grade for the criteria +, ~, - 
    }
    
    handleGradeChange(event){
        this.setState({'maxGrade': event.target.value});
        this.props.handleMaxGrade(event.target.value);
    }
    handleNonInputStandards( value ){
        this.setState({'maxGrade': value});
        this.props.handleMaxGrade(value);
    }

    render(){
        const {criteriaNum, maxGrade} = this.state;
        const { gradeType } = this.props;
        if(gradeType === 'criteria'){
            const maxNum = (criteriaNum) ? <MaxGradeNum value={maxGrade} handleGradeChange={this.handleGradeChange} />
            : null ;
            return (
                <div>
                    <div className="checkboxInput">
                        <input type="checkbox" value='false' onChange={this.handleCheckMark}/><label> Use '+', '~', '-' for grade </label> 
                    </div>
                    {maxNum}
                </div>   
            )
        }
        else {
            return null;
        }
    }
}


const MaxGradeNum = ( { value, handleGradeChange } ) => 
     <div className="textInput-short">
        <label>Grade out of: </label>
        <input 
            type='text'
            value={value}
            onChange={(event) => handleGradeChange(event)}
            placeholder='Use numbers'
            />
    </div>

export default MaxGrade;