import React from 'react';

const StudentItem = ({firstName, lastName}) => (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
    </tr>
);


export default StudentItem;
