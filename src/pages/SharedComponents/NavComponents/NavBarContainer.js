import React from 'react';
import NavBar from './NavBar';
import * as routes from '../../../constants/routes';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import TopContainerBar from './TopContainer';
import StudentNavContainer from './StudentPopUpMenu/StudentNav';

const generateNavbarLinks = (classroom, students) => {
    var links;
    if ( classroom ){
        links = 
        <div className="navLink-container">
            <NavLink to={routes.DASHBOARD}>Dashboard</NavLink>
            <NavLink to={routes.ADD_ASSESSMENT}>Add Assessment</NavLink>
            <NavLink to={routes.STANDARDS_LIST}>Standards</NavLink>
            <StudentNavContainer />
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
    classID: state.session.classID,
    students: state.students,
    teacherName: state.session.teacherName,
    visible: state.session.authUser,
  });

const NavBarContainer = ({classID, students, teacherName, visible}) =>
<<<<<<< HEAD
  (visible === null)? <div><TopContainerBar path="/"/></div> :
  <div>
      <TopContainerBar path="/dashboard" />
=======
  (visible === null)? <div><TopContainerBar/></div> :
  <div>
      <TopContainerBar />
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
      <NavBar teacherName={teacherName} links={generateNavbarLinks(classID, students)}/>
  </div>

export default connect(mapStateToProps)(NavBarContainer);