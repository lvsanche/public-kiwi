import React from 'react';

const StandardItem = ({id, standardName, assessmentType, subject}) => (
    <tr>
      <td>{standardName}</td>
      <td>{assessmentType}</td>
      <td>{subject}</td>
    </tr>
);


export default StandardItem;
