import React from 'react';
import * as routes from '../../../constants/routes';
import {NavLink} from 'react-router-dom';

const StudentNav = ({students, styling, barLocation}) => 
    <ul id="exp">
        <li>
            <a className="w3-bar-item w3-button w3-padding" href="">Students</a>
            <ul style={barLocation}>
                {Object.keys(students).map(studID => <StudentNavLine {...students[studID]} styling={styling}/> )}
            </ul>
        </li>
    </ul>

const StudentNavLine = ({firstName, lastName, id, styling}) => 
    <li>
        <p className="w3-bar-item w3-button w3-padding" style={styling}>{firstName+' '+lastName}</p>
        <ul>
            <li><NavLink className="w3-bar-item w3-button w3-padding" to={routes.STUDENT_STATS+'/'+id}>View Stats</NavLink></li>
            <li><NavLink className="w3-bar-item w3-button w3-padding" to={routes.EDIT_STUDENT+'/'+id}>Edit Grades</NavLink></li>
        </ul>
    </li>

export default StudentNav;