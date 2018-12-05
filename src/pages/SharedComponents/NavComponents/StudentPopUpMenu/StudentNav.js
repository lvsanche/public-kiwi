import React, {Component} from 'react';
import StudentTile from './StudentTile';
import './StudentPopUp.css';
import { connect } from 'react-redux';


const StudentNav = ({sortedStudentArray, display, closePopUp}) =>
    <div className='studentTileContainer' style={{display: display}}>
        {sortedStudentArray.map(student => 
            <StudentTile key={student.studentID} {...student} closePopUp={closePopUp} />
        )}
    </div>

const compNames = (studentA, studentB) => {
    var nameA = studentA.firstName+studentA.lastName;
    var nameB = studentB.firstName+studentB.lastName;
    return (nameA > nameB)? 1: (nameA < nameB)? -1 : 0;
}

//Returns array of sorted students by first name first
const sortStudents = (students) => {
    var studentArray = Object.keys(students).map( studID => students[studID]);
    return studentArray.sort(compNames);
}

const mapStateToProps = (state) => {
    return {
        sortedStudentArray: sortStudents(state.students)
    }
}

class StudentNavContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'none'
        };
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleClosingPopUp = this.handleClosingPopUp.bind(this);
    }

    handleMouseHover() {
        this.setState({
            display: 'flex',
        });
    }

    handleClosingPopUp() {
        this.setState({
            display: 'none'
        });
    }
    colorByDisplay(display) {
        if( display === 'none'){
            return {
                color: '#5e4955',
            backgroundColor: 'white'}
        }
        else {
            return ({color: 'white'  , backgroundColor: '#5e4955'})
        }
    }
    render() {
        const { sortedStudentArray } = this.props;
        const { display } = this.state;
        return (
            <div className="nav" 
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleClosingPopUp}>
                <div>
                    <p>Students</p>
                </div>
                <StudentNav 
                    closePopUp={this.handleClosingPopUp}
                    display={display} 
                    sortedStudentArray={sortedStudentArray}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(StudentNavContainer);