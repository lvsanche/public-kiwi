import React from 'react';
import NavBar from './NavBar';
import * as routes from '../../../constants/routes';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import TopContainerBar from './TopContainer';


const generateNavbarLinks = (classroom, students) => {
    var links;
    if ( classroom ){
        links = 
        <div className="navLink-container">
            <NavLink to={routes.DASHBOARD}>Dashboard</NavLink>
            <NavLink to={routes.ADD_ASSESSMENT}>Add Assessment</NavLink>
            <NavLink to={routes.STANDARDS_LIST}>Standards</NavLink>
            <NavLink to={routes.STUDENTS_LIST}>Students</NavLink>
        </div>
    }
    else{
        links = <div className="navLink-container">
            <NavLink to={routes.ADD_CLASS}>Add New Class</NavLink>
            </div>
    }

    return links;
}

const mapStateToProps = (state) => ({
    classroom: state.sessionState.currentClass,
    students: state.students,
    firstName: state.sessionState.firstName,
    visible: state.sessionState.authUser,
  });

const NavBarContainer = ({classroom, students, firstName, visible}) =>
  (visible === null)? <div><TopContainerBar/></div> :
  <div>
      <NavBar firstName={firstName} links={generateNavbarLinks(classroom, students)}/>
  </div>

export default connect(mapStateToProps)(NavBarContainer);