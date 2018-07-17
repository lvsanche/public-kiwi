import React from 'react';

const ClassItem = ({school, grade, year, username}) => (
    <div className="card">
        <div className="card-title"><h2>Confirm Class Details</h2></div>
        <div className="class-details flex-container-cols">
            <h2> School: <strong>{school}</strong></h2>
            <h2> Teacher: <strong>{username}</strong> </h2>
            <h2> Grade: <strong>{grade}</strong> </h2>
            <h2> Year: <strong>{year}</strong> </h2>
        </div>
    </div>
);


export default ClassItem;