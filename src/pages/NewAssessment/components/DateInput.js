import React from 'react';

const DateInput = ({labelText, handleChange, value}) =>
    <div className="dateInput">
        <label>{labelText}</label>
        <input
            value={value}
            onChange={ event => handleChange(event.target.value) }
            type="date"
            placeholder="YYYY/MM/DD"
            />
    </div>

export default DateInput;