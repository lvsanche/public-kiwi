import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import TopContainerBar from './TopContainer';
import { auth } from '../../../services/api';
import './NavBar.css';
import StudentNav from './StudentNav';


class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayNavBar: 'none',
      displayOverlay: 'none'
    }
    this.toggleNavBar = this.toggleNavBar.bind(this);
  }

  toggleNavBar () {
    if( this.state.displayNavBar === 'none'){
      this.setState( { 
          displayNavBar: 'block',
          displayOverlay: 'block'
        })
    }
    else{
      this.setState({
        displayNavBar: 'none',
        displayOverlay: 'none'
      })
    }
  }

  calculateHeight(numStudents, height){
      if ( height/ numStudents < 38){
        //means we need to make it smaller and go from top to bottom
        return {
            padding: '8px 16px!important',
            maxHeight: (height/numStudents).toString(),
            verticalAlign: 'middle',
            margin: '0'
          }
      }
      else{
          //means we need to center the list pop up
          return {
              padding: '8px 16px!important',
              maxHeight: '38',
              verticalAlign: 'middle',
              margin: '0'
            }
      }
  }

  barLocation(numStudents, height){
    console.log(height/numStudents)
      // if less than 38 we need to go to the top
      if( height < (432 + (numStudents * 38)) ){
          //all must go up
          if ( height / numStudents < 38){
          
            //means we need to make it smaller and go from top to bottom
            return {
                top: '0',
                height: '100%'
              }
          }
          else{
              //only 4 students down can fit 
              //means we need to center the list pop up
              console.log((-38 * (numStudents + 1)).toString())
              return {
                  top: (-38 * (numStudents-1)).toString()+'px',
                  position: 'absolute'
                }
          }
      }
      if ( height/ numStudents < 38){
          
        //means we need to make it smaller and go from top to bottom
        return {
            top: '0',
            height: '100%'
          }
      }
      else{
          //only 4 students down can fit 
          //means we need to center the list pop up
          return {
              top: '0',
              position: 'absolute'
            }
      }
  }

  render(){
    var navLinks;
    const {students} = this.props;
    const numStudents = Object.keys(students).length;
    if(this.props.class){
      //means we have a class so the links are
      navLinks = <div>
                  <NavLink className="w3-bar-item w3-button w3-padding" onClick={this.toggleNavBar} to={routes.DASHBOARD}>Home</NavLink>
                  <NavLink className="w3-bar-item w3-button w3-padding" onClick={this.toggleNavBar} to={routes.ADD_ASSESSMENT}>Add New Assessment</NavLink>
                  <NavLink className="w3-bar-item w3-button w3-padding" onClick={this.toggleNavBar} to={routes.STANDARDS_LIST}>Standards List</NavLink>
                  <NavLink className="w3-bar-item w3-button w3-padding" onClick={this.toggleNavBar} to={routes.STUDENTS_LIST}>Student List</NavLink>
                  <StudentNav students={students} barLocation={this.barLocation(numStudents, window.innerHeight)} styling={this.calculateHeight(numStudents, window.innerHeight)}/>
                </div>
    }
    else {
      navLinks = <div>
        <NavLink className="w3-bar-item w3-button w3-padding" onClick={this.toggleNavBar} to={routes.ADD_CLASS}>Add New Class</NavLink>
      </div>
    }
    return (
      <div >
        <TopContainerBar toggleNavBar={this.toggleNavBar} />
        <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={this.toggleNavBar} style={{cursor:'pointer', display:this.state.displayOverlay}} title="close side menu" id="myOverlay"></div>
        <div>
          <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{overflow:'visible', zIndex:3, width:'200px', display: this.state.displayNavBar}} id="mySidebar"><br/>
            <div class="w3-container">
              <h5>Dashboard</h5>
            </div>
            <div className="w3-bar-block">
              <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={this.toggleNavBar} title="close menu"><i className="fa fa-remove fa-fw"></i>Close Menu</a>
                {navLinks}
              <p className="w3-bar-item w3-button w3-padding" onClick={auth.doSignOut}>Sign Out</p>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}


export default NavBar;


import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import NonAuthNavBar from '../../../../older-version-components/NonAuthNavBar';

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    classSet: state.sessionState.currentClass,
    userName: state.sessionState.userName,
    students: state.students
  });

const Navigation = ({authUser, classSet, userName, students}) =>
    <div>
        { authUser
            ? <NavBar userName={userName} class={classSet} students={students} /> 
            : <NonAuthNavBar />
        }
    </div>



export default connect(mapStateToProps)(Navigation);