import React from 'react';

const PasswordInput = ({labelText, value, handleChange}) => 
    <div className="textInput">
        {(labelText) ? <label>{labelText}</label> : <label>Password</label>}
        <input
            value={value}
            onChange={event => handleChange(event.target.value)}
            type="password"
        />
    </div>

export default PasswordInput;