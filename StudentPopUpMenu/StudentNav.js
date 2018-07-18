import React, {Component} from 'react';
import StudentTile from './StudentTile';
import './StudentPopUp.css';
import { connect } from 'react-redux';

class StudentNavContainer extends Component {
    constructor(props){
        super(props);
        this.state = {display: 'none'};

        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseHoverLeave = this.handleMouseHoverLeave.bind(this);
        this.rand = this.rand.bind(this);
        this.handleClosingPopUp = this.handleClosingPopUp.bind(this);
    }

    handleMouseHover() {
        this.setState({display: 'flex'});
    }

    handleMouseHoverLeave(){
        this.setState({display: 'none'});
    }

    //NONE OF THIS GETS CALLED
    handleClosingPopUp(){
        console.log("THIS IS TRIGGERED");
        this.setState({display: 'none'});
    }

    //THIS WORKS WHEN CLICKED
    rand() {
        console.log("SOMETHNG");
    }

    render() {
        const { students } = this.props;
        const { display } = this.state;
        return (
            <div className="navButton"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHoverLeave}>
                <div>
                    <p>EXP STUD</p>
                </div>
                <StudentNav 
                    closePopUp={this.handleClosingPopUp}
                    rand={this.rand}
                    display={display} 
                    sortedStudentArray={students}/>
            </div>
        )
    }
}

const StudentNav = ({sortedStudentArray, display, closePopUp, rand}) =>
    <div className='studentTileContainer card' style={{display: display}}>
        {sortedStudentArray.map(student => 
            <StudentTile key={student.id} {...student} closePopup={closePopUp} rand={rand} />
        )}
    </div>


const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps)(StudentNavContainer);