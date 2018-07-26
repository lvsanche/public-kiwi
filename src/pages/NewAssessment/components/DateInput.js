import React from 'react';
import DatePicker from 'react-date-picker';

const DateInput = ({labelText, handleChange, value}) =>
    <div className="dateInput">
        <label>{labelText}</label>
        <DatePicker 
            onChange={handleChange}
            value={value}
            />
    </div>

export default DateInput;