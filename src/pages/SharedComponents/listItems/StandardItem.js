import React from 'react';

const StandardItem = ({standardName, gradeType, subject}) => (
    <tr>
      <td>{standardName}</td>
      <td>{gradeType}</td>
      <td>{subject}</td>
    </tr>
);


export default StandardItem;
