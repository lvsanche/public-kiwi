import React from 'react';
import { NavLink } from 'react-router-dom';
import './StudentPopUp.css';
import * as routes from '../../../../constants/routes';

class StudentTile extends React.Component {
    constructor(props){
        super(props);
        this.state = { display: 'none'};
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseHoverLeave = this.handleMouseHoverLeave.bind(this);
        this.handleClosingPopUp = this.handleClosingPopUp.bind(this);
    }

    handleMouseHover() {
        this.setState({display: 'flex'});
    }
    handleMouseHoverLeave(){
        this.setState({display: 'none'});
    }

    handleClosingPopUp () {
        this.props.closePopUp();
        this.setState({display: 'none'});
    }
    render() {
        const { firstName, lastName, studentID, closePopUp} = this.props;
        const { display } = this.state;
        return (
            <div className="studentTile"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHoverLeave}>
                    <p>{firstName + ' ' + lastName}</p>
                    <div className="tileButtonContainer" 
                        style={{display: display}}
                        onClick={closePopUp}
                        >
                        <NavLink to={routes.STUDENT_STATS+'/'+studentID+'#top'}><i className="fa fa-bar-chart" aria-hidden="true"></i></NavLink>
                        <NavLink to={routes.EDIT_STUDENT+'/'+studentID+'#'}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></NavLink>
                    </div> 
            </div>
        )
    }
}

export default StudentTile;