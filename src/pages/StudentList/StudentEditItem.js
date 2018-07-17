import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentEditItem = ({firstName, lastName, id}) => (
    <tr>
      <td><NavLink to={'/editStudent/'+id}>{firstName}</NavLink></td>
      <td>{lastName}</td>
    </tr>
);


export default StudentEditItem;
